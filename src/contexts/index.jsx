import { createContext } from "react"
import { useContent } from "../hooks"

export const CategoryContext = createContext()

const Contexts = ({ children }) => {
  const listMethods = useContent()

  return (
    <CategoryContext.Provider value={{ ...listMethods }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default Contexts
