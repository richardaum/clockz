import { useStyletron } from "baseui"
import { DisplaySmall, LabelSmall } from "baseui/typography"
import { BlitzPage } from "blitz"

export const DailySummary: BlitzPage = () => {
  const [css, theme] = useStyletron()
  return (
    <div className={css({ marginBottom: theme.sizing.scale1000 })}>
      <DisplaySmall
        color="accent"
        overrides={{ Block: { style: { fontWeight: 300 } } }}
        className={css({ textAlign: "right" })}
      >
        38'40
      </DisplaySmall>

      <LabelSmall color="primary300" className={css({ textAlign: "right" })}>
        Today
      </LabelSmall>
    </div>
  )
}
