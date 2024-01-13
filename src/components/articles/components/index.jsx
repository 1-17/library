import { LuCopy } from "react-icons/lu"
import classNames from "classnames"
import { useArticles, usePopup } from "../../../hooks"
import { copyToClipboard, formatToUpperCaseOrCapitalizeWithPlusSign } from "../../../utils"
import Button from "../../layout/Button"

const Component = () => {
  const { component } = useArticles()
  const { openPopup, closePopup } = usePopup()

  return (
    <div className="max-w-2xl">
      <div className="border rounded-shape p-4 shadow-md">
        {
          component.preview
            ? <component.preview />
            : (
              <span>
                Preview not available.
              </span>
            )
        }
      </div>
      {
        (component.techs && component.code) && (
          <>
            <nav className="mt-8">
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
                        {formatToUpperCaseOrCapitalizeWithPlusSign(tech)}
                      </Button>
                    </li>
                  )
                }
              </ul>
            </nav>
            <div className="bg-dark rounded-shape flex justify-between text-light text-sm">
              <pre className="w-full p-4 overflow-auto">
                <code>
                  <ol id="code-list" className="list-decimal marker:text-accent ml-8">
                    {
                      component.code.split("\n").map((line, i) => (
                        <li key={i}>
                          {line}
                        </li>
                      ))
                    }
                  </ol>
                </code>
              </pre>
              <Button
                popupTrigger
                aria-label="Copy code to clipboard"
                onClick={() => {
                  const codeList = Array.from(document.querySelectorAll("#code-list li"))
                  const codeText = codeList.map(list => list.textContent).join("\n")
                  copyToClipboard(codeText, "Code", openPopup, closePopup)
                }}
                className="text-2xl hover:text-accent h-fit p-4"
              >
                <LuCopy />
              </Button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Component
