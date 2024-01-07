import { useMobile } from "../../../hooks"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppBar = () => {
  const { mobile } = useMobile()

  return (
    mobile ? <Header /> : <Sidebar />
  )
}

export default AppBar
