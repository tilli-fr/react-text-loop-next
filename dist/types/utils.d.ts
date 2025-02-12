declare global {
    interface Window {
        mozRequestAnimationFrame: any;
        oRequestAnimationFrame: any;
        msRequestAnimationFrame: any;
        webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        mozCancelRequestAnimationFrame: any;
        webkitCancelRequestAnimationFrame: any;
        oCancelRequestAnimationFrame: any;
        msCancelRequestAnimationFrame: any;
        webkitCancelAnimationFrame: (handle: number) => void;
    }
}
declare interface Handle {
    value: number | void;
}
export type RequestTimeout = Record<string, unknown> | number | void | Handle;
export declare const requestTimeout: (fn: any, delay: number) => RequestTimeout;
export declare const clearRequestTimeout: (handle: any) => void;
export {};
