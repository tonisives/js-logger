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
