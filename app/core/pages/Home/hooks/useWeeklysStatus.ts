import { expectedDailyHours } from "app/core/constants"
import { reports as data } from "app/fixtures/reports"
import { getDay, intervalToDuration } from "date-fns"
import { normalize, sum, toHours, toMinutes } from "duration-fns"

const weekdaysList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

export const useWeeklyStats = () => {
  let maxHours = 0
  return data
    .map(({ weekday, reports }) => {
      const currentWeekdayIdx = getDay(new Date())
      const { formatted, totalHours } = getDuration(reports ?? [])
      maxHours = Math.max(totalHours, expectedDailyHours)
      return {
        hours: totalHours,
        weekday: weekday,
        initial: weekday?.toLocaleUpperCase()[0],
        duration: totalHours === 0 ? "" : formatted,
        active: weekdaysList[currentWeekdayIdx] === weekday,
      }
    })
    .map((stats) => ({
      ...stats,
      ratio: stats.hours / maxHours,
    }))
}

function getReportTypeByIdx(idx: number) {
  if (idx % 2 === 0) return "INCOMING"
  else return "OUTGOING"
}

function getDuration(reports: Date[]) {
  const MINUTES = 60
  const SECONDS = 60
  const MILLISECONDS = 1000
  const duration = reports.reduce((duration, currentDate, i) => {
    const previousDate = reports[i - 1]
    if (!previousDate) return duration

    if (getReportTypeByIdx(i - 1) !== "INCOMING") return duration

    return normalize(sum(duration, intervalToDuration({ start: previousDate, end: currentDate })))
  }, {})

  const totalHours = toHours(duration)
  const floorHours = Math.floor(totalHours)

  const remainingMinutes = totalHours - floorHours
  const truncatedMinutes = Math.floor(remainingMinutes * MINUTES * SECONDS * MILLISECONDS)
  const minutes = toMinutes(truncatedMinutes)
  const floorMinutes = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 })

  return {
    duration: duration,
    totalHours: totalHours,
    formatted: `${floorHours}'${floorMinutes}`,
  }
}
