export declare enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    OFF = 5
}
type Input = string | Error;
type LazyInput<T extends Input> = () => T;
type Config = {
    truncate?: number;
};
export declare let Logger: {
    level: LogLevel;
    config: {
        truncate: number;
    };
    enabledFor: (lvl: LogLevel) => boolean;
    setLevel: (level: LogLevel) => void;
    setConfig: (config: Config) => void;
    info: (msg: Input) => void;
    warn: (msg: Input) => void;
    error: (msg: Input) => string | Error;
    errorL: (msg: LazyInput<Input>) => Input | undefined;
    debug: (msg: Input) => void;
    trace: (msg: Input) => void;
};
export {};
