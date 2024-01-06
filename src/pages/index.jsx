import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useList } from "../hooks"
import App from "../components/layout/App"
import ContentList from "../components/layout/ContentList"

const Pages = () => {
  const { listOfContents } = useList()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ContentList />} />
        </Route>
        {listOfContents.map(content =>
          <Route key={content.name} path={content.name} element={content.name} />
        )}
      </Routes>
    </Router>
  )
}

export default Pages
