import { nth } from "lodash"

export function getLastDigit(seconds: number) {
  return nth(`${seconds}`, -1)
}
