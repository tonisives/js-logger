export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["TRACE"] = 0] = "TRACE";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["OFF"] = 5] = "OFF";
})(LogLevel || (LogLevel = {}));
export let Logger = {
    level: LogLevel.DEBUG,
    enabledFor: (lvl) => {
        return lvl >= Logger.level;
    },
    setLevel: (level) => {
        Logger.level = level;
    },
    info: (msg) => {
        logFun(LogLevel.INFO, msg);
    },
    warn: (msg) => {
        logFun(LogLevel.WARN, msg);
    },
    error: (msg) => {
        logFun(LogLevel.ERROR, msg);
    },
    debug: (msg) => {
        logFun(LogLevel.DEBUG, msg);
    },
    trace: (msg) => {
        logFun(LogLevel.TRACE, msg);
    },
};
let logFun = (level, msg) => {
    if (!Logger.enabledFor(level))
        return;
    let log;
    if (typeof msg === "function") {
        log = msg();
    }
    else {
        log = msg;
    }
    let hdlr = console.log;
    if (level === LogLevel.WARN && console.warn) {
        hdlr = console.warn;
    }
    else if (level === LogLevel.ERROR && console.error) {
        hdlr = console.error;
    }
    else if (level === LogLevel.INFO && console.info) {
        hdlr = console.info;
    }
    else if ((level === LogLevel.DEBUG || level === LogLevel.TRACE) &&
        console.debug) {
        hdlr = console.debug;
    }
    hdlr.call(console, log);
};
//# sourceMappingURL=Logger.js.map