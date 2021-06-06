import "app/styles/global.css"
import LoginForm from "app/auth/components/LoginForm"
import { engine } from "app/core/utils/styletron"
import { theme } from "app/core/utils/theme"
import { BaseProvider } from "baseui"
import {
  AppProps,
  AuthenticationError,
  AuthorizationError,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
  useRouter,
} from "blitz"
import { Fragment, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Provider as StyletronProvider } from "styletron-react"
import { Fill } from "app/core/components/Fill"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

  return (
    <Suspense fallback="Loading...">
      <ErrorBoundary
        FallbackComponent={RootErrorFallback}
        resetKeys={[router.asPath]}
        onReset={useQueryErrorResetBoundary().reset}
      >
        <StyletronProvider value={engine}>
          <BaseProvider overrides={{ AppContainer: { component: Fill } }} theme={theme}>
            {getLayout(<Component {...pageProps} />)}
          </BaseProvider>
        </StyletronProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
