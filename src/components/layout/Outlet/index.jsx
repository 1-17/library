import { useArticles } from "../../../hooks"
import ArticlesList from "./ArticlesList"
import Component from "./Component"
import Widget from "./Widget"

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
