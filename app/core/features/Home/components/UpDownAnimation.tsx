import { useStyletron } from "baseui"
import React from "react"

export function UpDownAnimation({ ...props }) {
  const [css, theme] = useStyletron()
  const move = {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(25px)" },
    "100%": { transform: "translateY(0px)" },
  }
  return (
    <span
      {...props}
      data-testid="up-down-animation"
      className={css({
        // @ts-ignore
        animationName: move,
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: theme.animation.easeInOutQuinticCurve,
      })}
    />
  )
}
