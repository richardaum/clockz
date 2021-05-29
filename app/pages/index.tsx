import Layout from "app/core/layouts/Layout"
import { Input } from "baseui/input"
import { ChangeEvent, useState } from "react"

const Home = () => {
  const [value, setValue] = useState("Hello")
  return (
    <Input
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target?.value)}
      placeholder="Controlled Input"
      clearOnEscape
    />
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
