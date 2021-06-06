import { Fill } from "app/core/components/Fill"
import { withProviders } from "app/core/hocs/withProviders"
import Layout from "app/core/layouts/Layout"
import { TimeProvider, useTime } from "app/core/providers/TimeProvider"
import { Block } from "baseui/block"
import { BlitzPage } from "blitz"
import Counter from "./Counter"
import { DailySummary } from "./DailySummary"
import WeeklyStats from "./WeeklyStats"
import { WeeklySummary } from "./WeeklySummary"

export const Home: BlitzPage = withProviders(TimeProvider)(() => {
  const { started } = useTime()
  return (
    <Layout title="Home">
      <Fill margin="scale800">
        <Block marginBottom="scale800">
          <WeeklySummary />
        </Block>

        <Block marginBottom="scale800">
          <WeeklyStats />
        </Block>

        <Fill marginBottom="scale800">{started ? <Counter /> : <DailySummary />}</Fill>
      </Fill>
    </Layout>
  )
})

Home.suppressFirstRenderFlicker = true
