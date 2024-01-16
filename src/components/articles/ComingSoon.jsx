import { BsHourglassSplit } from "react-icons/bs"
import { useArticles } from "../../hooks"
import Card from "../layout/Card"

const ComingSoon = () => {
  const { articles } = useArticles()

  return (
    <Card
      icon={<BsHourglassSplit />}
      title="Coming soon"
      description={`No ${articles.selectedArticle || articles.selectedSubcategory || articles.selectedCategory} here yet`}
    />
  )
}

export default ComingSoon
