import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useArticles } from "../hooks"
import App from "../components/layout/App"

const Pages = () => {
  const { widget } = useArticles()

  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
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
