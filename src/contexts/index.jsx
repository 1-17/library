import { createContext } from "react"
import { useArticlesMethods, usePopupMethods } from "../hooks"

export const CategoryContext = createContext()
export const PopupContext = createContext()

const Contexts = ({ children }) => {
  const articlesMethods = useArticlesMethods()
  const popupMethods = usePopupMethods()

  return (
    <CategoryContext.Provider value={{ ...articlesMethods }}>
      <PopupContext.Provider value={{ ...popupMethods }}>
        {children}
      </PopupContext.Provider>
    </CategoryContext.Provider>
  )
}

export default Contexts
