import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"
import WeeklyStats from "./WeeklyStats"
import { WeeklySummary } from "./WeeklySummary"
import { DailySummary } from "./DailySummary"
import { Block } from "baseui/block"

export const Home: BlitzPage = (props) => {
  return (
    <Layout title="Home">
      <Block marginBottom="scale800">
        <WeeklySummary />
      </Block>

      <Block marginBottom="scale800">
        <WeeklyStats />
      </Block>

      <Block marginBottom="scale800">
        <DailySummary />
      </Block>
    </Layout>
  )
}

Home.suppressFirstRenderFlicker = true
