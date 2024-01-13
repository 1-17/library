import Popup from "./Popup"
import AppBar from "./AppBar"
import NavigationBar from "../layout/NavigationBar"
import Outlet from "./Outlet"

const App = () => {
  return (
    <>
      <Popup />
      <AppBar />
      <main className="grow mt-12 md:mt-14 p-4 md:p-8 pt-8 md:pt-10 pb-16 md:pb-20 overflow-auto">
        <NavigationBar />
        <Outlet />
      </main>
    </>
  )
}

export default App
