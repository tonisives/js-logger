import { Logger } from "./Logger.js"
import { expect, it, vi } from "vitest"

it("should log", () => {
  // spy
  vi.spyOn(console, "info").mockImplementation(() => {})

  Logger.info(() => "msg 1")
  Logger.info("msg 2")

  expect(console.info).toHaveBeenCalledWith("msg 1")
  expect(console.info).toHaveBeenCalledWith("msg 2")
})

it("logs errors", () => {
  vi.spyOn(console, "error").mockImplementation(() => {})

  Logger.error(() => new Error("msg 1"))
  Logger.error("msg 2")

  expect(console.error).toHaveBeenCalledWith("msg 1")
  expect(console.error).toHaveBeenCalledWith("msg 2")
})
