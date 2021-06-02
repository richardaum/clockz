import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import { DisplaySmall, LabelSmall } from "baseui/typography"
import { Avatar } from "baseui/avatar"
import { BlitzPage } from "blitz"

export const WeeklySummary: BlitzPage = () => {
  const [css] = useStyletron()
  return (
    <Block display="flex">
      <Avatar name="profile" src="./avatar.jpeg" size="scale1600" />

      <Block flex="1">
        <DisplaySmall
          overrides={{ Block: { style: { fontWeight: 300 } } }}
          className={css({ textAlign: "right" })}
        >
          38'40
        </DisplaySmall>

        <LabelSmall color="primary300" className={css({ textAlign: "right" })}>
          This week
        </LabelSmall>
      </Block>
    </Block>
  )
}
