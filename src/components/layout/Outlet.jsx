import { useArticles } from "../../hooks"
import ArticlesList from "../articles"
import Component from "../articles/components"
import Widget from "../articles/widgets"

const Outlet = () => {
  const { articles } = useArticles()

  if (!articles.selectedArticle) {
    return <ArticlesList />
  }
  
  switch (articles.selectedCategory) {
    case "Components":
      return <Component />

    case "Widgets":
      return <Widget />
  }
}

export default Outlet
