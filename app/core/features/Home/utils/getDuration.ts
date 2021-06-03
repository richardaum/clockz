import { intervalToDuration } from "date-fns"
import { normalize, sum, toHours } from "duration-fns"
import { getReportTypeByIdx } from "../hooks/useWeeklysStatus"

export function getDuration(reports: Date[]) {
  const duration = reports.reduce((duration, currentDate, i) => {
    const previousDate = reports[i - 1]
    if (!previousDate) return duration

    if (getReportTypeByIdx(i - 1) !== "INCOMING") return duration

    return normalize(sum(duration, intervalToDuration({ start: previousDate, end: currentDate })))
  }, {})

  const totalHours = toHours(duration)

  return {
    duration: duration,
    totalHours: totalHours,
  }
}
