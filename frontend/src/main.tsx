// SSI / eth-crypto needs Node-style globals (Buffer, process) in the browser.
// These must run before any module that touches them is imported.
import { Buffer } from 'buffer';
import process from 'process';
(globalThis as any).Buffer = (globalThis as any).Buffer || Buffer;
(globalThis as any).process = (globalThis as any).process || process;
(globalThis as any).global = (globalThis as any).global || globalThis;

import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
