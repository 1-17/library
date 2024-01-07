import { createElement } from "react"
import { Link as RouterLink } from "react-router-dom"

const Link = ({ ...rest }) => {
  return (
    <>
      {" "}
      {createElement(
        rest.href ? "a" : RouterLink,
        {
          ...rest,
          ...rest.href &&
          {
            href: `https://${rest.href}`,
            target: "_blank",
            rel: "noopener noreferrer"
          }
        }
      )}
    </>
  )
}

export default Link
