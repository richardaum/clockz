import { useStyletron } from "baseui"
import { FlexGrid, FlexGridItem, FlexGridItemProps } from "baseui/flex-grid"
import { ParagraphSmall } from "baseui/typography"
import React from "react"
import { useWeeklyStats } from "../hooks/useWeeklysStatus"

interface Props {}

const WeeklyStats = (props: Props) => {
  const [css] = useStyletron()
  const stats = useWeeklyStats()

  return (
    <FlexGrid className={css({ height: "150px" })} flexGridColumnCount={7}>
      {stats.map(({ initial, weekday, ratio, duration, active }) => (
        <WeekDay
          key={weekday}
          aria-label={weekday}
          ratio={ratio}
          duration={duration}
          active={active}
        >
          {initial}
        </WeekDay>
      ))}
    </FlexGrid>
  )
}

interface WeekDayProps extends FlexGridItemProps {
  active?: boolean
  ratio: number
  duration?: string
}

function WeekDay({ active, children, ratio, duration, ...props }: WeekDayProps) {
  const [css, theme] = useStyletron()

  return (
    <FlexGridItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      {...props}
    >
      <ParagraphSmall
        as="div"
        overrides={{ Block: { style: { fontWeight: "bold" } } }}
        className={css({
          display: "flex",
          alignItems: "center",
          transform: "rotate(180deg)",
          writingMode: "vertical-rl",
          color: active ? theme.colors.accent : theme.colors.primary300,
        })}
      >
        {duration}
      </ParagraphSmall>

      <Bar active={active} height={ratio} />

      <ParagraphSmall
        as="div"
        className={css({
          textAlign: "center",
          color: active ? theme.colors.accent : theme.colors.primary300,
        })}
      >
        {children}
      </ParagraphSmall>
    </FlexGridItem>
  )
}

function createBarGradient({
  bottomColor,
  bottomPercent,
  topColor,
}: {
  bottomColor: string
  bottomPercent: string
  topColor: string
}): string {
  const params = [
    "to top",
    `${bottomColor} 0%`,
    `${bottomColor} ${bottomPercent}`,
    `${topColor} ${bottomPercent}`,
    `${topColor} 100%`,
  ].join(", ")
  return `linear-gradient(${params});`
}

function Bar({ active, height }: { active?: boolean; height: number }) {
  const [css, theme] = useStyletron()

  const background = (() => {
    const topColor = "#7e6225"
    const bottomColor = theme.colors.accent
    const bottomPercent = "90%"
    const isDualColorEnabled = false

    if (!active) return theme.colors.primary300

    if (isDualColorEnabled) {
      return createBarGradient({
        bottomColor: bottomColor,
        topColor: topColor,
        bottomPercent: bottomPercent,
      })
    }

    return theme.colors.accent
  })()

  return (
    <div
      className={css({
        background: background,
        flexShrink: 0,
        flexGrow: height,
        width: "6px",
        marginTop: theme.sizing.scale800,
        marginBottom: theme.sizing.scale800,
        borderRadius: "6px",
      })}
    />
  )
}

export default WeeklyStats
