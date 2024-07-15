export enum LogLevel {
  TRACE,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  OFF,
}

type Input = string | (() => string)

export let Logger = {
  level: LogLevel.DEBUG,
  enabledFor: (lvl: LogLevel) => {
    return lvl >= Logger.level
  },
  setLevel: (level: LogLevel) => {
    Logger.level = level
  },
  info: (msg: Input) => {
    logFun(LogLevel.INFO, msg)
  },
  warn: (msg: Input) => {
    logFun(LogLevel.WARN, msg)
  },
  error: (msg: Input) => {
    logFun(LogLevel.ERROR, msg)
  },
  debug: (msg: Input) => {
    logFun(LogLevel.DEBUG, msg)
  },
  trace: (msg: Input) => {
    logFun(LogLevel.TRACE, msg)
  },
}

let logFun = (level: LogLevel, msg: Input) => {
  if (!Logger.enabledFor(level)) return

  let log
  if (typeof msg === "function") {
    log = msg()
  } else {
    log = msg
  }

  log = log.length > 1000 ? `${log.slice(0, 600)}\n[...]\n${log.slice(-400)}` : log;

  let hdlr = console.log

  if (level === LogLevel.WARN && console.warn) {
    hdlr = console.warn
  } else if (level === LogLevel.ERROR && console.error) {
    hdlr = console.error
  } else if (level === LogLevel.INFO && console.info) {
    hdlr = console.info
  } else if (
    (level === LogLevel.DEBUG || level === LogLevel.TRACE) &&
    console.debug
  ) {
    hdlr = console.debug
  }

  hdlr.call(console, log)
}
