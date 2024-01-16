import classNames from "classnames"
import { useArticles } from "../../hooks"
import { formatTechName } from "../../utils"
import Button from "../layout/Button"
import CodeBox from "../layout/CodeBox"

const Component = () => {
  const articles = useArticles()
  
  return (
    <>
      <section>
        <h2 className="font-semibold text-lg sm:text-xl mb-4">
          Preview
        </h2>
        <div className="border rounded-shape p-4 shadow-md">
          {
            articles.component.preview
              ? typeof articles.component.preview === "string"
                  ? articles.component.preview
                  : <articles.component.preview />
              : <span>
                  Preview not available.
                </span>
          }
        </div>
      </section>
      <section>
        <h2 className="font-semibold text-lg sm:text-xl mb-4">
          Codes
        </h2>
        <nav>
          <ul className="flex text-sm mb-2 pb-2 whitespace-nowrap overflow-auto">
            {
              articles.component.techs.map((tech, i) =>
                <li key={i}>
                  <Button
                    onClick={() => articles.component.changeSelectedTech(tech)}
                    variant={articles.component.selectedTech === tech ? "primary" : "secondary"}
                    className={classNames(
                      "rounded-none px-4",
                      {
                        "border-l-0": articles.component.selectedTech !== tech && i !== 0,
                        "border-r-0": articles.component.selectedTech !== tech && i === articles.component.techs.indexOf(articles.component.selectedTech) - 1,
                        "rounded-l-full": i === 0,
                        "rounded-r-full": i === articles.component.techs.length - 1
                      }
                    )}
                  >
                    {formatTechName(tech)}
                  </Button>
                </li>
              )
            }
          </ul>
        </nav>
        <div className="*:mt-4 first:*:mt-0">
          <CodeBox component>
            <ul className="list-decimal marker:text-accent ml-8">
              {
                articles.component.code.split("\n").map((line, i) => (
                  <li key={i}>
                    {line}
                  </li>
                ))
              }
            </ul>
          </CodeBox>
          {
            articles.component.usage && (
              typeof articles.component.usage === "string"
                ? <CodeBox>
                    {articles.component.usage}
                  </CodeBox>
                : articles.component.usage.map((usage, i) =>
                    <CodeBox key={i}>
                      {usage}
                    </CodeBox>
                  )
            )
          }
        </div>
      </section>
    </>
  )
}

export default Component
