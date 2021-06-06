import { Fill } from "app/core/components/Fill"
import { FullWidthButton } from "app/core/components/FullWidthButton"
import TimeDisplay from "app/core/components/TimeDisplay"
import { useTime } from "app/core/providers/TimeProvider"
import { week } from "app/fixtures/reports"
import { styled, useStyletron } from "baseui"
import { Block } from "baseui/block"
import { Button } from "baseui/button"
import { LabelSmall } from "baseui/typography"
import { BlitzPage } from "blitz"
import { isSameDay } from "date-fns"
import { ZERO } from "duration-fns/dist/lib/units"
import { formatDuration } from "../utils/formatDuration"
import { getDuration } from "../utils/getDuration"

export const DailySummary: BlitzPage = () => {
  const [css] = useStyletron()
  const { start } = useTime()

  // FIXME useMemo to improve performance
  const day = week.find((day) => {
    const firstReport = day.reports?.[0]
    // FIXME assuming we are always on the current week
    return firstReport ? isSameDay(new Date(), firstReport) : false
  })
  const { duration } = day?.reports ? getDuration(day?.reports) : { duration: ZERO }

  return (
    <Fill>
      <TimeDisplay color="accent" className={css({ textAlign: "right" })}>
        {formatDuration(duration)}
      </TimeDisplay>

      <LabelSmall color="primary300" className={css({ textAlign: "right" })}>
        Today
      </LabelSmall>

      <Block marginTop="auto">
        <FullWidthButton onClick={start}>Start</FullWidthButton>
      </Block>
    </Fill>
  )
}
