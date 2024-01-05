import { createContext } from "react"
import { useList } from "../hooks"

export const CategoryContext = createContext()

const Contexts = ({ children }) => {
  const methods = useList()

  return (
    <CategoryContext.Provider value={{ ...methods }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default Contexts
