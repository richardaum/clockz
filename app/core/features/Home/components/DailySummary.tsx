import { week } from "app/fixtures/reports"
import { useStyletron } from "baseui"
import { DisplaySmall, LabelSmall } from "baseui/typography"
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
    return firstReport ? isSameDay(new Date(), firstReport) : false
  })
  const { duration } = day?.reports ? getDuration(day?.reports) : { duration: ZERO }

  return (
    <div className={css({ marginBottom: theme.sizing.scale1000 })}>
      <DisplaySmall
        color="accent"
        overrides={{ Block: { style: { fontWeight: 300 } } }}
        className={css({ textAlign: "right" })}
      >
        {formatDuration(duration)}
      </DisplaySmall>

      <LabelSmall color="primary300" className={css({ textAlign: "right" })}>
        Today
      </LabelSmall>
    </div>
  )
}
