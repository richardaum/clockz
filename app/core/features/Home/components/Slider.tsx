import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import React from "react"
import { animated, config, useTransition } from "react-spring"

interface Props {
  current?: string
}

export const Slider = ({ current }: Props) => {
  const [css] = useStyletron()

  const transitions = useTransition(current, {
    initial: { opacity: 1 },
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-50%)" },
    config: config.wobbly,
  })

  return (
    <div style={{ position: "relative" }}>
      <Block className={css({ opacity: 0 })}>{current}</Block>
      {transitions((props, item) => (
        <animated.div key={item} style={{ ...props, top: 0, left: 0, position: "absolute" }}>
          {item}
        </animated.div>
      ))}
    </div>
  )
}
