import useInterval from "@use-it/interval"
import TimeDisplay from "app/core/components/TimeDisplay"
import { Block } from "baseui/block"
import { ZERO } from "duration-fns/dist/lib/units"
import { nth } from "lodash"
import React, { useState } from "react"
import { getNextSecond } from "../utils/getNextSecond"
import { Divider } from "./Divider"
import { Slider } from "./Slider"

interface Props {}

const Counter = (props: Props) => {
  const [duration, setDuration] = useState(ZERO)

  useInterval(() => {
    setDuration(getNextSecond(duration))
  }, 1000)

  return (
    <>
      <TimeDisplay>
        <Block display="flex" justifyContent="center" alignItems="flex-start">
          <Slider current={nth(duration.minutes.toString(), -1) || "0"} />
          <Divider tick={nth(duration.seconds.toString(), -1) || "0"} />
          <Slider current={nth(duration.seconds.toString(), -2) || "0"} />
          <Slider current={nth(duration.seconds.toString(), -1) || "0"} />
        </Block>
      </TimeDisplay>
    </>
  )
}

export default Counter
