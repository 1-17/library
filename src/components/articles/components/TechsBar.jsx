import classNames from "classnames"

const TechsBar = () => {
  const techs = ["HTML", "React", "React + TailwindCSS", "Angular"]

  return (
    <nav>
      <ul className="*:inline w-fit py-2">
        {
          techs.map((tech, i) =>
            <li key={tech} { ...i !== 0 && { className: "border-l border-inherit"} }>
              <button className={classNames(
                  "bg-light border border-dark leading-7 px-4 hover:brightness-90",
                  {
                    "rounded-l-full": i === 0,
                    "rounded-r-full": i === techs.length - 1
                  }
                )}>
                {tech}
              </button>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default TechsBar
