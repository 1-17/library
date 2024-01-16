import { Fragment } from "react"
import classNames from "classnames"
import { useArticles } from "../../../hooks"
import { formatTechName } from "../../../utils"
import Button from "../../layout/Button"
import CodeBox from "../../layout/CodeBox"

const Component = () => {
  const { component } = useArticles()
  
  return (
    <>
      <section>
        <h2 className="font-semibold text-lg sm:text-xl mb-4">
          Preview
        </h2>
        <div className="border rounded-shape p-4 shadow-md">
          {
            component.preview
              ? <component.preview />
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
              component.techs.map((tech, i) =>
                <li key={i}>
                  <Button
                    onClick={() => component.changeSelectedTech(tech)}
                    variant={component.selectedTech === tech ? "primary" : "secondary"}
                    className={classNames(
                      "rounded-none px-4",
                      {
                        "border-l-0": component.selectedTech !== tech && i !== 0,
                        "border-r-0": component.selectedTech !== tech && i === component.techs.indexOf(component.selectedTech) - 1,
                        "rounded-l-full": i === 0,
                        "rounded-r-full": i === component.techs.length - 1
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
                component.code.split("\n").map((line, i) => (
                  <li key={i}>
                    {line}
                  </li>
                ))
              }
            </ul>
          </CodeBox>
          {
            component.usage && (
              typeof component.usage === "string"
                ? <CodeBox>
                    {component.usage}
                  </CodeBox>
                : component.usage.map((usage, i) =>
                    <Fragment key={i}>
                      <CodeBox>
                        {usage}
                      </CodeBox>
                    </Fragment>
                  )
            )
          }
        </div>
      </section>
    </>
  )
}

export default Component
