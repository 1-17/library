import { useContext, useState } from "react"
import { PopupContext } from "../contexts"
import { capitalizeString } from "../utils"

export const _usePopupMethods = () => {
  const [popup, setPopup] = useState("")

  const openPopup = (title, description, okAction, cancelAction) => {
    setPopup({ title, description, okAction, cancelAction })
  }

  const closePopup = () => setPopup("")

  const copyToClipboard = (text, copiedItemName) => {
    navigator.clipboard.writeText(text)
      .then(() => openPopup("Success!", `${capitalizeString(copiedItemName)} copied to clipboard.`, closePopup))
      .catch(() => openPopup("Failed to copy!", "Something went wrong. Please, try again.", closePopup))
  }
  
  return { popup, copyToClipboard }
}

export const _usePopup = () => useContext(PopupContext)
