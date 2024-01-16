import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useArticles } from "../hooks"
import App from "../components/layout/App"
import Articles from "../components/articles"
import Example from "./Example"
import NotFound from "./NotFound"

const Pages = () => {
  const { widget } = useArticles()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Articles />} />
          <Route path="example" element={<Example />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {
          widget.routes.map((route, i) =>
            <Route key={i} path={route.path} element={route.element} />
          )
        }
      </Routes>
    </Router>
  )
}

export default Pages
