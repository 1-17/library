import { LuCopy } from "react-icons/lu"
import { usePopup } from "../../../../hooks"
import { copyToClipboard } from "../../../../utils"

const CodeBlock = () => {
  const { popupOpen, openPopup, closePopup } = usePopup()
  
  return (
    <div className="bg-dark rounded-xl flex justify-between text-light text-sm max-w-xl">
      <pre className="px-4 py-3 overflow-auto">
        <code>
          <ol id="code" className="list-inside list-decimal marker:text-accent">
            <li>console.log("Hello, world!")</li>
            <li>console.log("Hello, world!")</li>
            <li>console.log("Hello, world!")</li>
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
  )
}

export default CodeBlock
