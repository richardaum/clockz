import useInterval from "@use-it/interval"
import { Fill } from "app/core/components/Fill"
import { FullWidthButton } from "app/core/components/FullWidthButton"
import TimeDisplay from "app/core/components/TimeDisplay"
import { useTime } from "app/core/providers/TimeProvider"
import { Block } from "baseui/block"
import { ZERO } from "duration-fns/dist/lib/units"
import { nth } from "lodash"
import React, { useState } from "react"
import { getNextSecond } from "../utils/getNextSecond"
import { Divider } from "./Divider"
import { Slider } from "./Slider"

const Counter = () => {
  const [duration, setDuration] = useState(ZERO)
  const { pause } = useTime()

  useInterval(() => {
    setDuration(getNextSecond(duration))
  }, 1000)

  return (
    <Fill>
      <TimeDisplay>
        <Block display="flex" justifyContent="center" alignItems="flex-start">
          <Slider current={getNthDigit(duration.minutes, -1)} />
          <Divider tick={getNthDigit(duration.seconds, -1)} />
          <Slider current={getNthDigit(duration.seconds, -2)} />
          <Slider current={getNthDigit(duration.seconds, -1)} />
        </Block>
      </TimeDisplay>

      <Block marginTop="auto">
        <FullWidthButton onClick={pause}>Stop</FullWidthButton>
      </Block>
    </Fill>
  )
}

function getNthDigit(number: number, position: number) {
  return nth(number.toString(), position) || "0"
}

export default Counter
