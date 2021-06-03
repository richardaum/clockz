import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import { DisplaySmall, LabelSmall } from "baseui/typography"
import { Avatar } from "baseui/avatar"
import { BlitzPage } from "blitz"
import { week } from "app/fixtures/reports"
import { getDuration } from "../hooks/getDuration"
import { Duration } from "date-fns"
import { normalize, sum } from "duration-fns"
import { formatDuration } from "../hooks/formatDuration"

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
        <DisplaySmall
          overrides={{ Block: { style: { fontWeight: 300 } } }}
          className={css({ textAlign: "right" })}
        >
          {formatDuration(duration)}
        </DisplaySmall>

        <LabelSmall color="primary300" className={css({ textAlign: "right" })}>
          This week
        </LabelSmall>
      </Block>
    </Block>
  )
}
