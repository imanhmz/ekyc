import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as amqplib from 'amqplib';

const EXCHANGE = 'kyc.direct';
const PROCESSING_QUEUE = 'kyc_processing';
const RESULTS_QUEUE = 'kyc_results';
const PROCESSING_KEY = 'kyc.process';
const RESULTS_KEY = 'kyc.result';

@Injectable()
export class QueueService implements OnModuleInit {
    private readonly logger = new Logger(QueueService.name);
    private connection: any;
    private channel: any;
    private resultHandler: ((msg: any) => Promise<void>) | null = null;

    async onModuleInit() {
        await this.connect();
    }

    private async connect(retries = 10) {
        const url = process.env.RABBITMQ_URL || 'amqp://kyc_mq:kyc_mq_pass@localhost:5672';
        for (let i = 0; i < retries; i++) {
            try {
                this.connection = await amqplib.connect(url);
                this.channel = await this.connection.createChannel();

                await this.channel.assertExchange(EXCHANGE, 'direct', { durable: true });
                await this.channel.assertQueue(PROCESSING_QUEUE, { durable: true });
                await this.channel.assertQueue(RESULTS_QUEUE, { durable: true });
                await this.channel.bindQueue(PROCESSING_QUEUE, EXCHANGE, PROCESSING_KEY);
                await this.channel.bindQueue(RESULTS_QUEUE, EXCHANGE, RESULTS_KEY);

                // Start consuming results
                await this.channel.consume(RESULTS_QUEUE, async (msg) => {
                    if (!msg) return;
                    try {
                        const payload = JSON.parse(msg.content.toString());
                        if (this.resultHandler) {
                            await this.resultHandler(payload);
                        }
                        this.channel.ack(msg);
                    } catch (e) {
                        this.logger.error('Failed to process result message', e);
                        this.channel.nack(msg, false, false); // dead-letter
                    }
                });

                this.logger.log('Connected to RabbitMQ');
                return;
            } catch (e) {
                this.logger.warn(`RabbitMQ connection attempt ${i + 1}/${retries} failed: ${e.message}`);
                await new Promise((r) => setTimeout(r, 3000));
            }
        }
        this.logger.error('Could not connect to RabbitMQ after all retries');
    }

    setResultHandler(handler: (msg: any) => Promise<void>) {
        this.resultHandler = handler;
    }

    async publishKycJob(payload: Record<string, any>) {
        if (!this.channel) {
            this.logger.error('RabbitMQ channel not ready');
            return;
        }
        this.channel.publish(
            EXCHANGE,
            PROCESSING_KEY,
            Buffer.from(JSON.stringify(payload)),
            { persistent: true },
        );
        this.logger.log(`Published kyc job: ${payload.kyc_id}`);
    }
}
