import { createElement } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

const Button = ({ variant, size, external, ...rest }) => {
  return (
    createElement(
      rest.href
        ? "a"
        : rest.to
          ? Link
          : "button",
      {
        ...rest,
        ...external && {
          target: "_blank",
          rel: "noopener noreferrer"
        },
        className: classNames(
          "border border-current rounded-full w-full px-2",
          {
            "block text-center": rest.href || rest.to,
            "bg-dark border-dark text-light hover:brightness-150": variant === "filled",
            "hover:brightness-90": variant !== "filled",
            "bg-accent-light text-accent": variant === "primary",
            "bg-light text-dark": !variant,
            "leading-6": size === "sm",
            "leading-8": !size
          },
          rest.className
        )
      }
    )
  )
}

export default Button
