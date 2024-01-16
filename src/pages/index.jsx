import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useArticles } from "../hooks"
import App from "../components/layout/App"
import Articles from "../components/articles"
import Example from "./Example"
import NotFound from "./NotFound"

const Pages = () => {
  const articles = useArticles()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Articles />} />
          <Route path="example" element={<Example />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {
          articles.widget.routes.map(route =>
            <Route key={route.key} path={route.path} />
          )
        }
      </Routes>
    </Router>
  )
}

export default Pages
