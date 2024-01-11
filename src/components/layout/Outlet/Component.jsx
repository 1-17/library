import { LuCopy } from "react-icons/lu"
import classNames from "classnames"
import { useArticles, usePopup } from "../../../hooks"
import { copyToClipboard, formatToUpperCaseOrCapitalizeWithPlusSign } from "../../../utils"
import Button from "../Button"

const Component = () => {
  const { components } = useArticles()
  const { popupOpen, openPopup, closePopup } = usePopup()

  return (
    <div className="mx-auto max-w-2xl">
      <div className="border rounded-xl mb-8 p-4 shadow-md">
        <components.component />
      </div>
      <nav>
        <ul className="flex text-sm mb-2 pb-2 whitespace-nowrap overflow-auto">
          {
            components.techs.map((tech, i) =>
              <li key={i}>
                <Button
                  onClick={() => components.selectedTech !== tech && components.changeSelectedTech(tech)}
                  {...components.selectedTech === tech && { variant: "primary" }}
                  className={classNames(
                    "rounded-none px-4",
                    {
                      "border-l-0": components.selectedTech !== tech && i !== 0,
                      "border-r-0": components.selectedTech !== tech && i === components.techs.indexOf(components.selectedTech) - 1,
                      "rounded-l-full": i === 0,
                      "rounded-r-full": i === components.techs.length - 1
                    }
                  )}>
                  {formatToUpperCaseOrCapitalizeWithPlusSign(tech)}
                </Button>
              </li>
            )
          }
        </ul>
      </nav>
      <div className="bg-dark rounded-xl flex justify-between text-light text-sm">
        <pre className="px-4 py-3 overflow-auto">
          <code>
            <ol id="code" className="list-inside list-decimal marker:text-accent">
              {
                components.code && (
                  components.code.split("\n").map((line, i) => (
                    <li key={i}>
                      {line}
                    </li>
                  ))
                )
              }
            </ol>
          </code>
        </pre>
        <button
          aria-expanded={popupOpen}
          aria-controls="popup"
          aria-haspopup="dialog"
          aria-label="Copy code to clipboard"
          onClick={() => {
            const codeList = Array.from(document.querySelectorAll("#code li"))
            const codeText = codeList.map(li => li.textContent).join("\n")
            copyToClipboard(codeText, openPopup, closePopup)
          }}
          className="text-2xl hover:text-accent h-fit p-4"
        >
          <LuCopy />
        </button>
      </div>
    </div>
  )
}

export default Component
