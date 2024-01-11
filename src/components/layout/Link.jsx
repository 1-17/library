import { createElement } from "react"
import { Link as RouterLink } from "react-router-dom"

const Link = ({ external, ...rest }) => {
  return (
    <>
      {" "}
      {createElement(
        rest.href ? "a" : RouterLink,
        {
          ...rest,
          ...rest.href && {
            href: `https://${rest.href}`
          },
          ...external &&
          {
            target: "_blank",
            rel: "noopener noreferrer"
          }
        }
      )}
      {" "}
    </>
  )
}

export default Link
