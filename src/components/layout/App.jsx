import Contexts from "../../contexts"
import AppBar from "./AppBar"
import ContentList from "./ContentList"

const App = () => {
  return (
    <Contexts>
      <AppBar />
      <main className="grow p-4">
        <ContentList />
      </main>
    </Contexts>
  )
}

export default App
