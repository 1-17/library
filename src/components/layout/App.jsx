import Contexts from "../../contexts"
import AppBar from "./AppBar"
import Content from "./Content"

const App = () => {
  return (
    <Contexts>
      <AppBar />
      <main className="grow p-4">
        <Content />
      </main>
    </Contexts>
  )
}

export default App
