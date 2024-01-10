import { createPortal } from "react-dom"
import classNames from "classnames"
import { usePopup } from "../../hooks"
import Button from "./Button"

const Popup = () => {
  const { popupOpen, popup } = usePopup()

  return (
    popupOpen && createPortal(
      <div
        id="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
        tabIndex={-1}
        className="bg-black bg-opacity-50 fixed top-0 left-0 grid place-items-center w-full h-screen p-4 z-50"
        >
        <div className="bg-light rounded-xl w-full max-w-sm p-4">
          <h2 id="popup-title" className="font-semibold text-xl sm:text-2xl">
            {popup.title}
          </h2>
          <p id="popup-description">
            {popup.description}
          </p>
          <div className={classNames(
            "mt-4 ml-auto",
            {
              "max-w-32": !popup.cancelAction,
              "flex max-[250px]:flex-wrap gap-2 max-w-60": popup.cancelAction
            }
            )}>
            <Button onClick={popup.okAction} variant="filled">
              OK
            </Button>
            {
              popup.cancelAction && (
                <Button onClick={popup.cancelAction}>
                  Cancel
                </Button>
              )
            }
          </div>
        </div>
      </div>, document.body
    )
  )
}

export default Popup
