import { Outlet } from "react-router-dom"
import AppBar from "./AppBar"

const App = () => {
  return (
    <>
      <AppBar />
      <main className="p-4 pb-16">
        <Outlet />
      </main>
    </>
  )
}

export default App
