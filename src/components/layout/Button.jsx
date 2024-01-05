import classNames from "classnames"

const Button = ({ secondary, ...rest }) => {
  return (
    <button
      { ...rest }
      className={classNames(
        "border border-current rounded-full leading-6 w-full px-2 hover:brightness-90",
        {
          "bg-light text-dark": !secondary,
          "bg-accent-light text-accent": secondary,
        },
        rest.className
      )}
      >
    </button>
  )
}

export default Button
