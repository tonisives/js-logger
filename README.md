# jst-logger


## install
yarn add 'jst-logger@tonisives/jst-logger'

## about

This is a fork of js-logger. It is a fork of the original js-logger with the following changes:

- allows both function call logging and string logging
- If you call with function, eg `Logger.info(() => "hello")`, then it will be lazyly evaluated
