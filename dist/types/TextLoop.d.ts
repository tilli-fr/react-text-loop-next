import React, { ReactChild, ReactFragment, ReactPortal } from "react";
import { OpaqueConfig, TransitionStyle } from "react-motion";
import { RequestTimeout } from "./utils";
type Props = {
    children?: (string | JSX.Element)[] | undefined;
    interval: number | number[];
    delay: number;
    adjustingSpeed: number;
    springConfig: {
        stiffness: number;
        damping: number;
    };
    fade: boolean;
    mask: boolean;
    noWrap: boolean;
    className?: string;
    onChange?: Function;
};
type State = {
    elements: (ReactChild | ReactFragment | ReactPortal)[];
    currentEl: ReactChild | ReactFragment | ReactPortal;
    currentWordIndex: number;
    wordCount: number;
    currentInterval: number;
};
declare class TextLoop extends React.Component<Props, State> {
    isUnMounting: boolean;
    tickDelay: RequestTimeout;
    tickLoop: RequestTimeout;
    wordBox: HTMLDivElement | null;
    static defaultProps: Props;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    clearTimeouts(): void;
    willLeave: () => {
        opacity: OpaqueConfig;
        translate: OpaqueConfig;
    };
    willEnter: () => {
        opacity: 0 | 1;
        translate: number;
    };
    tick: () => void;
    getOpacity(): 0 | 1;
    getDimensions(): ClientRect | DOMRect | {
        width: 0;
        height: 0;
    };
    wrapperStyles: any;
    elementStyles: any;
    getTransitionMotionStyles(): TransitionStyle[];
    render(): JSX.Element;
}
export default TextLoop;
