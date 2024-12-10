export declare enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    OFF = 5
}
type Input = string | (() => string);
type ErrorInput = string | (() => string) | Error | (() => Error);
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
    error: (msg: ErrorInput) => void;
    debug: (msg: Input) => void;
    trace: (msg: Input) => void;
};
export {};
