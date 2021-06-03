import Layout from "app/core/layouts/Layout"
import { Block } from "baseui/block"
import { BlitzPage } from "blitz"
import Counter from "./Counter"
import WeeklyStats from "./WeeklyStats"
import { WeeklySummary } from "./WeeklySummary"

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
        <Counter />
      </Block>
    </Layout>
  )
}

Home.suppressFirstRenderFlicker = true
