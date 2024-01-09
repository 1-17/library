import classNames from "classnames"
import Button from "../../../layout/Button"

const TechsBar = () => {
  const techs = ["HTML", "CSS", "React", "React + TailwindCSS", "Angular"]

  return (
    <nav>
      <ul className="flex text-sm mb-2 pb-2 whitespace-nowrap overflow-auto">
        {
          techs.map((tech, i) =>
            <li key={tech}>
              <Button className={classNames(
                  "rounded-none px-4",
                  {
                    "rounded-l-full": i === 0,
                    "rounded-r-full": i === techs.length - 1
                  }
                )}>
                {tech}
              </Button>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default TechsBar
