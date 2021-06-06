import React, { FC, useState } from "react"
import { createSafeContext } from "react-safe-context"

export interface TimeProviderContext {
  started: boolean
  start(): void
  pause(): void
}

const Context = createSafeContext<TimeProviderContext>("TimeContext")

export const TimeProvider: FC = ({ children }) => {
  const [started, set] = useState(false)

  const pause = () => set(false)
  const start = () => set(true)

  return (
    <Context.Provider value={{ started: started, start: start, pause: pause }}>
      {children}
    </Context.Provider>
  )
}

export const useTime = Context.useValue
