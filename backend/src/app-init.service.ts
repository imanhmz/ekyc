import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { KycService } from './kyc/kyc.service';
import { QueueService } from './queue/queue.service';

/**
 * Wires the QueueService result handler to KycService after both are initialized.
 * This breaks the circular dependency: QueueModule doesn't import KycModule.
 */
@Injectable()
export class AppInitService implements OnModuleInit {
    private readonly logger = new Logger(AppInitService.name);

    constructor(
        private readonly kycService: KycService,
        private readonly queueService: QueueService,
    ) { }

    onModuleInit() {
        this.queueService.setResultHandler((msg) => this.kycService.processResult(msg));
        this.logger.log('QueueService result handler wired to KycService');
    }
}
