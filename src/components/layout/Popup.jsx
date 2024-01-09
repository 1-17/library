import { createPortal } from "react-dom"
import classNames from "classnames"
import { usePopup } from "../../hooks"
import Button from "./Button"

const Popup = () => {
  const { popupOpen, popupMessage, closePopup } = usePopup()

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
            {popupMessage.title}
          </h2>
          <p id="popup-description">
            {popupMessage.description}
          </p>
          <div className={classNames(
            "mt-4 ml-auto",
            {
              "max-w-32": !popupMessage.cancelButton,
              "flex max-[250px]:flex-wrap gap-2 max-w-60": popupMessage.cancelButton
            }
            )}>
            <Button aria-label="Close popup" onClick={closePopup} variant="filled">
              OK
            </Button>
            {
              popupMessage.cancelButton && (
                <Button aria-label="Close popup" onClick={closePopup}>
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
