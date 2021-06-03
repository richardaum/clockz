import { Duration } from "date-fns"
import { normalize, sum } from "duration-fns"

export function getNextSecond(duration: Duration) {
  return normalize(sum(duration, { seconds: 1 }))
}
