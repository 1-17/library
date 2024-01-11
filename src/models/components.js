import Link from "../components/articles/components/Link"

const components = [
  {
    id: 1,
    component: Link,
    code: {
      react: `import { createElement } from "react"
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
            href: \`https://\${rest.href}\`
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
`
    }
  },
  {
    id: 2,
    component: "",
    code: {
      html: "button html code",
      css: "button css code",
      react: "button react code",
      react_tailwind: "button react + tailwind code",
      angular: "button angular code"
    }
  },
  {
    id: 3,
    component: "",
    code: {
      html: "header html code",
      css: "header css code",
      react: "header react code",
      react_tailwind: "header react + tailwind code",
      angular: "header angular code"
    }
  },
  {
    id: 4,
    component: "",
    code: {
      html: "form html code",
      css: "form css code",
      react: "form react code",
      react_tailwind: "form react + tailwind code",
      angular: "form angular code"
    }
  },
  {
    id: 5,
    component: "",
    code: {
      html: "field html code",
      css: "field css code",
      react: "field react code",
      react_tailwind: "field react + tailwind code",
      angular: "field angular code"
    }
  },
  {
    id: 6,
    component: "",
    code: {
      html: "stack html code",
      css: "stack css code",
      react: "stack react code",
      react_tailwind: "stack react + tailwind code",
      angular: "stack angular code"
    }
  },
]

export default components
