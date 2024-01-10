import Popup from "./Popup"
import AppBar from "./AppBar"
import NavigationBar from "../layout/NavigationBar"
import Outlet from "./Outlet"

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
