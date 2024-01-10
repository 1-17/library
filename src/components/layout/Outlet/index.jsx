import { useArticles } from "../../../hooks"
import ArticlesList from "./ArticlesList"
import CodeSection from "./CodeSection"
import EmbedButton from "./EmbedButton"

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
