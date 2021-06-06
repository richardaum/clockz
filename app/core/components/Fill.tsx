import { Block, BlockProps } from "baseui/block"
import React, { forwardRef } from "react"

interface Props extends BlockProps {}

export const Fill = forwardRef((props: Props, ref) => {
  return <Block ref={ref} display="flex" flexDirection="column" flex="1" {...props} />
})

Fill.displayName = "Fill"
