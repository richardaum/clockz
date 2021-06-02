import { engine } from "app/core/utils/styletron"
import { Document, Html, DocumentHead as Head, Main, BlitzScript, DocumentContext } from "blitz"
import { Provider as StyletronProvider } from "styletron-react"
import { Server, Sheet } from "styletron-engine-atomic"

class MyDocument extends Document<{ stylesheets: Sheet[] }> {
  static async getInitialProps(context: DocumentContext) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={engine}>
              <App {...props} />
            </StyletronProvider>
          ),
      })

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage: renderPage,
    })

    const stylesheets = (engine instanceof Server && engine.getStylesheets()) || []
    return { ...initialProps, stylesheets: stylesheets }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
