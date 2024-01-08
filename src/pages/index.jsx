import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useArticles } from "../hooks"
import App from "../components/layout/App"
import ArticlesList from "../components/articles/ArticlesList"

const Pages = () => {
  const { articlesRoutes } = useArticles()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ArticlesList />} />
          {articlesRoutes.map(route =>
            <Route key={route.key} path={route.path} element={<route.component />} />
          )}
        </Route>
      </Routes>
    </Router>
  )
}

export default Pages
