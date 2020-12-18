/* eslint-disable no-console */

export type LogType = 'log' | 'warn' | 'error';

/**
 * Shows a warning message
 * @param message Warning message
 */
export function WARN(message: any, ...params: any[]): void {
    // TODO: Show only with the appropiate verbose level
    console.warn(message, ...params);
}

/**
 * Shows a warning message
 * @param message Warning message
 */
export function INFO(message: any, ...params: any[]): void {
    // TODO: Show only with the appropiate verbose level
    console.info(message, ...params);
}

/**
 * Shows a warning message
 * @param message Warning message
 */
export function DEBUG(message: any, ...params: any[]): void {
    // TODO: Show only with the appropiate verbose level
    if (process.env.NODE_ENV === 'local') {
        console.warn(message, ...params);
    }
}
