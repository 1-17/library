import classNames from "classnames"

const Field = ({ label, ...rest }) => {
  return (
    <div>
      {
        label && (
          <label htmlFor={rest.id} className={classNames(
            {
              "mr-3": rest.type === "radio"
            }
          )}>
            {label}
          </label>
        )
      }
      <input
        { ...rest }
        id={rest.id}
        type={rest.type}
        className={classNames(
          {
            "bg-white border-2 rounded-xl px-2 py-0.5 outline-none focus:border-current": rest.type === "text"
          }
        )}
      />
    </div>
  )
}

export default Field
