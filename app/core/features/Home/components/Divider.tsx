import { animated, config, useSpring, useTransition } from "@react-spring/web"
import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import React, { useEffect, useState } from "react"

interface Props {
  tick?: string
}

export function Divider({ tick }: Props) {
  const [flip, set] = useState(false)
  const [css, theme] = useStyletron()

  useEffect(() => {
    set((flip) => !flip)
  }, [tick])

  const move = useSpring({
    from: { transform: "translateY(10px) " },
    to: { transform: "translateY(30px) " },
    config: config.wobbly,
    reverse: flip,
  })

  return (
    <animated.div style={move}>
      <Block
        overrides={{ Block: { style: { textAlign: "center" } } }}
        className={css({
          width: theme.sizing.scale0,
          height: theme.sizing.scale400,
          background: theme.colors.primary50,
          margin: `0 ${theme.sizing.scale100}`,
        })}
      />
    </animated.div>
  )
}
