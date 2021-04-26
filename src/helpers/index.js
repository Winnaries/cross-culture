import React from "react"

/**
 * This too also refers to code snippets from
 * https://www.joshwcomeau.com/snippets
 */

const QUERY = "(prefers-reduced-motion: no-preference)"
const isRenderingOnServer = typeof window === "undefined"

const getInitialState = () => {
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
}

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

export const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    getInitialState
  )

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = event => {
      setPrefersReducedMotion(!event.matches)
    }

    mediaQueryList.addListener(listener)
    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [])

  return prefersReducedMotion
}

export const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = React.useRef(null)
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  })

  React.useEffect(() => {
    let isEnabled = typeof minDelay === "number" && typeof maxDelay === "number"
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }

    return () => window.clearTimeout(timeoutId.current)
  }, [minDelay, maxDelay])

  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current)
  }, [])

  return cancel
}
