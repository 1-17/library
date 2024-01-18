import { useArticles } from "../../hooks"
import ArticlesList from "./ArticlesList"
import Component from "./Component"
import Widget from "./Widget"
import ComingSoon from "./ComingSoon"

const Articles = () => {
  const articles = useArticles()
  
  if (articles.current.length && !articles.selectedArticle) {
    return <ArticlesList />
  }
  
  if (articles.component.code) {
    return <Component />
  }

  if (articles.widget.component && articles.widget.controls && articles.widget.route) {
    return <Widget />
  }
  
  return <ComingSoon />
}

export default Articles
