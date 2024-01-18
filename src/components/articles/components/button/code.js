const code = {}

code.component = {
  "react_react-router-dom_tailwindcss_classnames": `import { createElement } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

const Button = ({ variant, external, ...rest }) => {
  return (
    createElement(
      rest.href
        ? "a"
        : rest.to
          ? Link
          : "button",
      {
        ...rest,
        ...(rest.href && rest.to) && {
          role: "button"
        },
        ...rest.href && {
          href: !rest.href.startsWith("http")
            ? \`https://\${rest.href}\`
            : rest.href
        },
        ...external && {
          target: "_blank",
          rel: "noopener noreferrer"
        },
        className: classNames(
          {
            "block text-center": rest.href || rest.to,
            "border border-current rounded-full w-full px-2": variant,
            "bg-dark border-dark text-light hover:brightness-150": variant === "filled",
            "hover:brightness-90": variant !== "filled",
            "bg-accent-light text-accent": variant === "primary",
            "bg-light text-dark": variant === "secondary"
          },
          rest.className
        )
      }
    )
  )
}

export default Button
`
}

code.usage = {
  "react_react-router-dom_tailwindcss_classnames": [
    `<Button href="google.com" external variant="primary">Click here</Button>`,
    `<Button to="/example" variant="secondary">Click here</Button>`,
    `<Button onClick={() => alert("Hello! You clicked me.")} variant="filled">Click here</Button>`,
  ]
}

export default code
