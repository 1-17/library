import { createContext } from "react"
import { useArticlesMethods } from "../hooks"

export const CategoryContext = createContext()

const Contexts = ({ children }) => {
  const articlesMethods = useArticlesMethods()

  return (
    <CategoryContext.Provider value={{ ...articlesMethods }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default Contexts
