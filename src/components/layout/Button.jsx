import { createElement } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { usePopup } from "../../hooks"

const Button = ({ variant, size, external, popupTrigger, ...rest }) => {
  const { popupOpen } = usePopup()

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
        ...popupTrigger && {
          "aria-expanded": popupOpen,
          "aria-controls": "popup",
          "aria-haspopup": "dialog"
        },
        className: classNames(
          {
            "block text-center": rest.href || rest.to,
            "border border-current rounded-full w-full px-2": variant,
            "bg-dark border-dark text-light hover:brightness-150": variant === "filled",
            "hover:brightness-90": variant !== "filled",
            "bg-accent-light text-accent": variant === "primary",
            "bg-light text-dark": variant === "secondary",
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
