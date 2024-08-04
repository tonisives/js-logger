export enum LogLevel {
  TRACE,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  OFF,
}

type Input = string | (() => string)
type Config = {
  // default 2000. Set to 0/-1 to disable truncation
  truncate?: number
}

export let Logger = {
  level: LogLevel.DEBUG,
  config: { truncate: 2000 },
  enabledFor: (lvl: LogLevel) => {
    return lvl >= Logger.level
  },
  setLevel: (level: LogLevel) => {
    Logger.level = level
  },
  setConfig: (config: Config) => {
    Logger.config = { ...Logger.config, ...config }
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

  log = truncate(log)

  let hdlr = console.log

  if (level === LogLevel.WARN && console.warn) {
    hdlr = console.warn
  } else if (level === LogLevel.ERROR && console.error) {
    hdlr = console.error
  } else if (level === LogLevel.INFO && console.info) {
    hdlr = console.info
  } else if ((level === LogLevel.DEBUG || level === LogLevel.TRACE) && console.debug) {
    hdlr = console.debug
  }

  hdlr.call(console, log)
}

const truncate = (log: string) => {
  if (Logger.config.truncate && Logger.config.truncate > 0 && log.length > Logger.config.truncate) {
    let top = Math.floor(Logger.config.truncate * 0.65)
    let bottom = Math.floor(Logger.config.truncate * 0.35)
    log = `${log.slice(0, top)}\n[...]\n${log.slice(-bottom)}`
  }

  return log
}
