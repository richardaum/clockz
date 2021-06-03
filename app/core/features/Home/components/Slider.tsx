import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import React, { ReactNode } from "react"
import { stopPropagation } from "../utils/stopPropagation"

export function Slider({
  active,
  current,
  next,
  ...props
}: {
  active: boolean
  current: ReactNode
  next: ReactNode
}) {
  const [css, theme] = useStyletron()

  const fadein = {
    "0%": { opacity: 0 },
    "20%": { opacity: 0 },
    "100%": { opacity: 1 },
  }

  const fadeout = {
    "0%": { opacity: 1 },
    "70%": { opacity: 0 },
    "100%": { opacity: 0 },
  }

  const top = {
    "100%": { transform: "translateY(-50%)" },
  }

  return (
    <Block
      {...props}
      className={
        active
          ? css({
              // @ts-ignore
              animationName: top,
              animationDuration: theme.animation.timing1000,
              // animationIterationCount: "infinite",
              animationTimingFunction: theme.animation.easeInOutQuinticCurve,
            })
          : ""
      }
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Block
        className={
          active
            ? css({
                // @ts-ignore
                animationName: fadeout,
                animationDuration: theme.animation.timing1000,
                // animationIterationCount: "infinite",
                animationTimingFunction: theme.animation.easeInOutQuinticCurve,
              })
            : ""
        }
        {...stopPropagation}
      >
        {current}
      </Block>
      <Block
        className={
          active
            ? css({
                // @ts-ignore
                animationName: fadein,
                animationDuration: theme.animation.timing1000,
                // animationIterationCount: "infinite",
                animationTimingFunction: theme.animation.easeInOutQuinticCurve,
              })
            : ""
        }
        {...stopPropagation}
      >
        {next}
      </Block>
    </Block>
  )
}
