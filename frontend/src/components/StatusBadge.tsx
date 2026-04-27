import React from 'react';
import type { StatusResponse } from '../api';

type Status = StatusResponse['status'] | undefined;

const STATUS_CONFIG: Record<NonNullable<Status>, { label: string; color: string; dot: string }> = {
    PENDING: { label: 'PENDING', color: '#6b7280', dot: '⬤' },
    PROCESSING: { label: 'PROCESSING', color: '#3b82f6', dot: '⬤' },
    APPROVED: { label: 'APPROVED', color: '#22c55e', dot: '⬤' },
    REJECTED: { label: 'REJECTED', color: '#ef4444', dot: '⬤' },
    FLAGGED: { label: 'FLAGGED', color: '#f59e0b', dot: '⬤' },
};

interface Props {
    status: Status;
}

export function StatusBadge({ status }: Props) {
    if (!status) return null;
    const cfg = STATUS_CONFIG[status];
    return (
        <span className="status-badge" style={{ color: cfg.color }}>
            {cfg.dot} {cfg.label}
        </span>
    );
}
