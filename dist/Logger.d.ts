export declare enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    OFF = 5
}
type Input = string | (() => string);
export declare let Logger: {
    level: LogLevel;
    enabledFor: (lvl: LogLevel) => boolean;
    setLevel: (level: LogLevel) => void;
    info: (msg: Input) => void;
    warn: (msg: Input) => void;
    error: (msg: Input) => void;
    debug: (msg: Input) => void;
    trace: (msg: Input) => void;
};
export {};
