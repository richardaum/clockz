import { toHours, toMinutes } from "duration-fns"

export function formatDuration(duration: Duration) {
  const MINUTES = 60
  const SECONDS = 60
  const MILLISECONDS = 1000

  const totalHours = toHours(duration)
  const floorHours = Math.floor(totalHours)

  const remainingMinutes = totalHours - floorHours
  const truncatedMinutes = Math.floor(remainingMinutes * MINUTES * SECONDS * MILLISECONDS)
  const minutes = toMinutes(truncatedMinutes)
  const floorMinutes = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 })

  return `${floorHours}'${floorMinutes}`
}
