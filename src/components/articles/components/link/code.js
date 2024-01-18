const code = {}

code.component = {
  "react_react-router-dom": `import { createElement } from "react"
import { Link as RouterLink } from "react-router-dom"

const Link = ({ external, ...rest }) => {
  return (
    createElement(
      rest.href ? "a" : RouterLink,
      {
        ...rest,
        ...rest.href && {
          href: !rest.href.startsWith("http")
            ? \`https://\${rest.href}\`
            : rest.href
        },
        ...external && {
          target: "_blank",
          rel: "noopener noreferrer"
        }
      }
    )
  )
}

export default Link
`
}

code.usage = {
  "react_react-router-dom": [
    `<Link href="google.com" external>Click here</Link>`,
    `<Link to="/example">Click here</Link>`
  ]
}

export default code
