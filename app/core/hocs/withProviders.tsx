import { ComponentType } from "react"

export const withProviders =
  <Props extends {}>(...providers: ComponentType[]) =>
  (WrappedComponent: ComponentType<Props>) =>
  (props: Props) =>
    providers.reduceRight((acc, prov) => {
      let Provider = prov
      if (Array.isArray(prov)) {
        Provider = prov[0]
        return <Provider {...prov[1]}>{acc}</Provider>
      }
      return <Provider>{acc}</Provider>
    }, <WrappedComponent {...props} />)
