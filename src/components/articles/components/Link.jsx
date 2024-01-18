import Component from "../../../models/Component"
import LinkComponent from "../../layout/Link"

class Link extends Component {
  cover = () => {
    return (
      <LinkComponent className="underline">
        Click here
      </LinkComponent>
    )
  }

  preview = () => {
    const website = "google.com"
    const route = "/example"

    return (
      <div className="*:mb-2 last:*:mb-0">
        <p>
          <LinkComponent href={website} external className="underline">
            Click here
          </LinkComponent>
          {""} to open <span className="italic">{website}</span> on a new tab.
        </p>
        <p>
          <LinkComponent to={route} className="underline">
            Click here
          </LinkComponent>
          {""} to open a route of this app on this tab.
        </p>
      </div>
    )
  }

  codes = {
    component: {
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
`   },
    usage: {
      "react_react-router-dom": [
        `<Link href="google.com" external>Click here</Link>`,
        `<Link to="/example">Click here</Link>`
      ]
    }
  }
}

const _link = new Link()

export default _link
