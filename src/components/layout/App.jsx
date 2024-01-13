import Popup from "./Popup"
import AppBar from "./AppBar"
import Breadcrumb from "../layout/Breadcrumb"
import Articles from "../articles"

const App = () => {
  return (
    <>
      <Popup />
      <AppBar />
      <main className="grow mt-12 md:mt-14 p-4 md:p-8 pt-8 md:pt-10 pb-16 md:pb-20 overflow-auto">
        <Breadcrumb />
        <Articles />
      </main>
    </>
  )
}

export default App
