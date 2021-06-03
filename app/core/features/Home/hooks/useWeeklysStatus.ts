import { expectedDailyHours } from "app/core/constants"
import { week as data } from "app/fixtures/reports"
import { getDay, isSameDay } from "date-fns"
import { formatDuration } from "../utils/formatDuration"
import { getDuration } from "../utils/getDuration"

const weekdaysList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

export const useWeeklyStats = () => {
  let maxHours = 0
  return data
    .map(({ weekday, reports }) => {
      const currentWeekdayIdx = getDay(new Date())
      const { duration, totalHours } = getDuration(reports ?? [])
      const day = reports?.[0]
      maxHours = Math.max(totalHours, expectedDailyHours)
      return {
        hours: totalHours,
        weekday: weekday,
        initial: weekday?.toLocaleUpperCase()[0],
        duration: totalHours === 0 ? "" : formatDuration(duration),
        active: day ? isSameDay(day, new Date()) : weekdaysList[currentWeekdayIdx] === weekday,
      }
    })
    .map((stats) => ({
      ...stats,
      ratio: stats.hours / maxHours,
    }))
}

export function getReportTypeByIdx(idx: number) {
  if (idx % 2 === 0) return "INCOMING"
  else return "OUTGOING"
}
