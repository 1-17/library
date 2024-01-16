import { LuCopy } from "react-icons/lu"
import { usePopup } from "../../hooks"
import Button from "./Button"

const CodeBox = ({ children, component }) => {
  const { copyToClipboard } = usePopup()

  return (
    <div className="bg-dark rounded-shape flex justify-between text-light text-sm *:p-4">
      <pre className="w-full overflow-auto">
        <code>
          {children}
        </code>
      </pre>
      <Button
        popupTrigger
        aria-label="Copy code to clipboard"
        onClick={e =>
          copyToClipboard(
            component
              ? Array.from(document.querySelectorAll("code li")).map(list => list.textContent).join("\n")
              : e.currentTarget.previousSibling.querySelector("code").textContent
          , "Code")
        }
        className="text-2xl hover:text-accent h-fit"
      >
        <LuCopy />
      </Button>
    </div>
  )
}

export default CodeBox
