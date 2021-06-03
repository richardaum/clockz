import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import React from "react"

export function Divider() {
  const [css, theme] = useStyletron()

  const scale = {
    "0%": { transform: "scaleY(0.5)", transformOrigin: "top bottom" },
    "25%": { transform: "scaleY(1)" },
    "50%": { transform: "scaleY(0.5)", transformOrigin: "bottom top" },
    "75%": { transform: "scaleY(1)" },
    "100%": { transform: "scaleY(0.5)" },
  }

  return (
    <Block
      className={css({
        marginTop: theme.sizing.scale300,
        // @ts-ignore
        animationName: scale,
        animationDuration: "2s",
        animationIterationCount: "infinite",
      })}
    >
      <Block
        className={css({
          width: theme.sizing.scale0,
          height: theme.sizing.scale400,
          background: theme.colors.primary50,
          margin: `0 ${theme.sizing.scale100}`,
        })}
      />
    </Block>
  )
}
