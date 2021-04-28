import * as React from "react"
import { redirectTo } from "@reach/router"

const NotFoundPage = () => {
  React.useLayoutEffect(() => {
    redirectTo("/")
  })

  return <div></div>
}

export default NotFoundPage
