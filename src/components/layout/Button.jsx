import { createElement } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

const Button = ({ secondary, ...rest }) => {
  return (
    createElement(
      rest.href
        ? "a"
        : rest.to
          ? Link
          : "button",
      {
        ...rest,
        className: classNames(
          "border border-current rounded-full leading-6 w-full px-2 hover:brightness-90",
          {
            "block text-center": rest.href || rest.to,
            "bg-light text-dark": !secondary,
            "bg-accent-light text-accent": secondary,
          },
          rest.className
        )
      }
    )
  )
}

export default Button
