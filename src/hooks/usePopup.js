import { useContext, useState } from "react"
import { PopupContext } from "../contexts"

export const _usePopupMethods = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  
  const initialState = { title: "", description: "", okAction: null, cancelAction: null }
  const [popup, setPopup] = useState(initialState)

  const openPopup = (title, description, okAction, cancelAction) => {
    setPopupOpen(true)
    setPopup({ title: title, description: description, okAction: okAction, cancelAction: cancelAction })
  }

  const closePopup = () => {
    setPopupOpen(false)
    setPopup(initialState)
  }
  
  return { popupOpen, popup, openPopup, closePopup }
}

export const _usePopup = () => useContext(PopupContext)
