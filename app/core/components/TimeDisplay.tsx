import { BlockProps } from "baseui/block"
import { DisplaySmall } from "baseui/typography"
import React, { FC } from "react"

interface Props extends BlockProps {}

const TimeDisplay: FC<Props> = ({ children, ...props }) => {
  return (
    <DisplaySmall overrides={{ Block: { style: { fontWeight: 300 } } }} {...props}>
      {children}
    </DisplaySmall>
  )
}

export default TimeDisplay
