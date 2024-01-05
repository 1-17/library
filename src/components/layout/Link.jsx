import { createElement } from "react"

const Link = ({ ...rest }) => {
  const element = rest.href ? "a" : "a"

  return (
    <>
      {" "}
      {createElement(
        element,
        {
          ...rest,
          ...rest.href ?
          {
            href: `https://${rest.href}`,
            target: "_blank",
            rel: "noopener noreferrer"
          }
          :
          {
            to: rest.to
          }
        }
      )}
    </>
  )
}

export default Link
