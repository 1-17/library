import { createElement } from "react"
import { Link as RouterLink } from "react-router-dom"
import classNames from "classnames"

const Link = ({ external, ...rest }) => {
  return (
    createElement(
      rest.href ? "a" : RouterLink,
      {
        ...rest,
        ...rest.href && {
          href: !rest.href.startsWith("http")
            ? `https://${rest.href}`
            : rest.href
        },
        ...external && {
          target: "_blank",
          rel: "noopener noreferrer"
        },
        className: classNames(
          "font-semibold hover:text-accent",
          rest.className
        )
      }
    )
  )
}

export default Link
