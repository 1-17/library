import { useArticles } from "../../../hooks"
import ArticlesList from "./ArticlesList"
import CodeSection from "./component"
import EmbedButton from "./widget"

const Outlet = () => {
  const { selectedArticle, selectedCategory } = useArticles()

  if (!selectedArticle) {
    return <ArticlesList />
  }
  
  switch (selectedCategory) {
    case "Components":
      return <CodeSection />

    case "Widgets":
      return <EmbedButton />
  }
}

export default Outlet
