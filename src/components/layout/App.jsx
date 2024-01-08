import { Outlet } from "react-router-dom"
import AppBar from "./AppBar"
import NavigationBar from "../layout/NavigationBar"

const App = () => {
  return (
    <>
      <AppBar />
      <main className="grow mt-12 p-4 pb-16">
        <NavigationBar />
        <Outlet />
      </main>
    </>
  )
}

export default App
