import { Outlet } from "react-router-dom"
import AppBar from "./AppBar"
import Popup from "./Popup"
import NavigationBar from "../layout/NavigationBar"

const App = () => {
  return (
    <>
      <Popup />
      <AppBar />
      <main className="grow mt-12 p-4 pb-16 overflow-auto">
        <NavigationBar />
        <Outlet />
      </main>
    </>
  )
}

export default App
