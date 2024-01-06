import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useList } from "../hooks"
import App from "../components/layout/App"
import ContentList from "../components/layout/ContentList"

const Pages = () => {
  const { contentRoutes } = useList()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ContentList />} />
          {contentRoutes.map(route =>
            <Route key={route.key} path={route.path} element={route.component} />
          )}
        </Route>
      </Routes>
    </Router>
  )
}

export default Pages
