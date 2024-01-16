import { useArticles } from "../../hooks"
import ArticlesList from "./ArticlesList"
import Component from "./components"
import Widget from "./widgets"
import ComingSoon from "./ComingSoon"

const Articles = () => {
  const { articles, component, widget } = useArticles()
  
  if (articles.current.length && !articles.selectedArticle) {
    return <ArticlesList />
  }
  
  if (articles.selectedCategory === "Components" && component.code) {
    return <Component />
  }

  if (articles.selectedCategory === "Widgets") {
    return <Widget />
  }
  
  return <ComingSoon />
}

export default Articles
