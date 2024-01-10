import { useState } from "react"
import classNames from "classnames"
import { useArticles } from "../../../../hooks"
import Button from "../../Button"

const TechsBar = () => {
  const { currentArticles, selectedArticle } = useArticles()
  const codes = currentArticles.find(article => article.name === selectedArticle).code
  const techs = Object.keys(codes)
  
  const [currentTech, setCurrentTech] = useState(techs[0])
  
  return (
    <nav>
      <ul className="flex text-sm mb-2 pb-2 whitespace-nowrap overflow-auto">
        {
          techs.map((tech, i) =>
            <li key={tech}>
              <Button
                onClick={() => currentTech !== tech && setCurrentTech(tech)}
                { ...currentTech === tech && { variant: "primary" } }
                className={classNames(
                  "rounded-none px-4",
                  {
                    "border-l-0": currentTech !== tech && i !== 0,
                    "border-r-0": currentTech !== tech && i === techs.indexOf(currentTech) - 1,
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
