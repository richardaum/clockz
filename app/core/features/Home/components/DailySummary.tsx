import TimeDisplay from "app/core/components/TimeDisplay"
import { week } from "app/fixtures/reports"
import { useStyletron } from "baseui"
import { LabelSmall } from "baseui/typography"
import { BlitzPage } from "blitz"
import { isSameDay } from "date-fns"
import { ZERO } from "duration-fns/dist/lib/units"
import { formatDuration } from "../hooks/formatDuration"
import { getDuration } from "../hooks/getDuration"

export const DailySummary: BlitzPage = () => {
  const [css, theme] = useStyletron()

  // FIXME useMemo to improve performance
  const day = week.find((day) => {
    const firstReport = day.reports?.[0]
    // FIXME assuming we are always on the current week
    return firstReport ? isSameDay(new Date(), firstReport) : false
  })
  const { duration } = day?.reports ? getDuration(day?.reports) : { duration: ZERO }

  return (
    <div className={css({ marginBottom: theme.sizing.scale1000 })}>
      <TimeDisplay color="accent" className={css({ textAlign: "right" })}>
        {formatDuration(duration)}
      </TimeDisplay>

      <LabelSmall color="primary300" className={css({ textAlign: "right" })}>
        Today
      </LabelSmall>
    </div>
  )
}
