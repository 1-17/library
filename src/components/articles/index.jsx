import { useArticles } from "../../hooks"
import ArticlesList from "./ArticlesList"
import Component from "./components/Component"
import Widget from "./widgets/Widget"
import ComingSoon from "./ComingSoon"

const Articles = () => {
  const { articles } = useArticles()
  
  if (articles.current.length && !articles.selectedArticle) {
    return <ArticlesList />
  }
  
  if (articles.selectedCategory === "Components" && articles.component.code) {
    return <Component />
  }

  if (articles.selectedCategory === "Widgets" && articles.widget.route) {
    return <Widget />
  }
  
  return <ComingSoon />
}

export default Articles
