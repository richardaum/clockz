import TimeDisplay from "app/core/components/TimeDisplay"
import { Block } from "baseui/block"
import { ZERO } from "duration-fns/dist/lib/units"
import React, { useState } from "react"
import { Divider } from "./Divider"
import { getLastDigit } from "../utils/getLastDigit"
import { getNextSecond } from "../utils/getNextSecond"
import { Slider } from "./Slider"
import { UpDownAnimation } from "./UpDownAnimation"

interface Props {}

const Counter = (props: Props) => {
  const [duration, setDuration] = useState(ZERO)
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <TimeDisplay>
        <Block display="flex" justifyContent="center" alignItems="flex-start">
          <span>0</span>
          <UpDownAnimation>
            <Divider />
          </UpDownAnimation>
          <span>0</span>
          <Slider
            active={playing}
            current={getLastDigit(duration.seconds)}
            next={getLastDigit(getNextSecond(duration).seconds)}
            // @ts-ignore
            onAnimationEnd={() => {
              console.log("onAnimationIteration")
              setPlaying((playing) => !playing)
              // setDuration((duration) => getNextSecond(duration))
            }}
          />
        </Block>
      </TimeDisplay>

      <button onClick={() => setPlaying((playing) => !playing)}>
        {playing ? "Stop" : "Start"}
      </button>
    </>
  )
}

export default Counter
