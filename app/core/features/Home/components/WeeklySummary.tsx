import TimeDisplay from "app/core/components/TimeDisplay"
import { week } from "app/fixtures/reports"
import { useStyletron } from "baseui"
import { Avatar } from "baseui/avatar"
import { Block } from "baseui/block"
import { LabelSmall } from "baseui/typography"
import { BlitzPage } from "blitz"
import { Duration } from "date-fns"
import { normalize, sum } from "duration-fns"
import { formatDuration } from "../utils/formatDuration"
import { getDuration } from "../utils/getDuration"

export const WeeklySummary: BlitzPage = () => {
  const [css] = useStyletron()

  // FIXME useMemo to improve performance
  const duration = week.reduce<Duration>((sumOfDurations, day) => {
    const { duration } = getDuration(day.reports ?? [])
    return normalize(sum(sumOfDurations, duration))
  }, {})

  return (
    <Block display="flex">
      <Avatar name="profile" src="./avatar.jpeg" size="scale1600" />

      <Block flex="1">
        <TimeDisplay className={css({ textAlign: "right" })}>
          {formatDuration(duration)}
        </TimeDisplay>

        <LabelSmall color="primary300" className={css({ textAlign: "right" })}>
          This week
        </LabelSmall>
      </Block>
    </Block>
  )
}
