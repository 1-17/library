import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useArticles } from "../hooks"
import App from "../components/layout/App"

const Pages = () => {
  const { widgets } = useArticles()

  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        {
          widgets.routes.map((route, i) =>
            <Route key={i} path={route.path} element={route.element} />
          )
        }
        <Route path="example" element="Hi! this is just a route example!" />
        <Route path="*" element="Route not found!" />
      </Routes>
    </Router>
  )
}

export default Pages
