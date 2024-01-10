import { LuCopy } from "react-icons/lu"
import classNames from "classnames"
import { useArticles, usePopup } from "../../../hooks"
import { copyToClipboard, formatToUpperCaseOrCapitalizeWithPlusSign } from "../../../utils"
import Button from "../Button"

const CodeSection = () => {
  const { component } = useArticles()
  const { popupOpen, openPopup, closePopup } = usePopup()

  return (
    <>
      <nav>
        <ul className="flex text-sm mb-2 pb-2 whitespace-nowrap overflow-auto">
          {
            component.techs.map((tech, i) =>
              <li key={i}>
                <Button
                  onClick={() => component.selectedTech !== tech && component.changeSelectedTech(tech)}
                  {...component.selectedTech === tech && { variant: "primary" }}
                  className={classNames(
                    "rounded-none px-4",
                    {
                      "border-l-0": component.selectedTech !== tech && i !== 0,
                      "border-r-0": component.selectedTech !== tech && i === component.techs.indexOf(component.selectedTech) - 1,
                      "rounded-l-full": i === 0,
                      "rounded-r-full": i === component.techs.length - 1
                    }
                  )}>
                  {formatToUpperCaseOrCapitalizeWithPlusSign(tech)}
                </Button>
              </li>
            )
          }
        </ul>
      </nav>
      <div className="bg-dark rounded-xl flex justify-between text-light text-sm max-w-xl">
        <pre className="px-4 py-3 overflow-auto">
          <code>
            <ol id="code" className="list-inside list-decimal marker:text-accent">
              <li>{component.code}</li>
            </ol>
          </code>
        </pre>
        <button
          aria-expanded={popupOpen}
          aria-controls="popup"
          aria-haspopup="dialog"
          aria-label="Copy code to clipboard"
          onClick={() => copyToClipboard(document.getElementById("code").innerHTML, openPopup, closePopup)}
          className="text-2xl hover:text-accent h-fit p-4"
        >
          <LuCopy />
        </button>
      </div>
    </>
  )
}

export default CodeSection
