import { useArticles } from "../../hooks"

const ComingSoon = () => {
  const { articles } = useArticles()

  return (
    <div>
      <h2 className="font-semibold text-lg sm:text-xl mb-2">
        Coming soon!
      </h2>
      <p>
        No {""}
        <span className="italic">
          {
            articles.selectedArticle
              ? articles.selectedArticle
              : articles.selectedSubcategory
                ? articles.selectedSubcategory
                : articles.selectedCategory
          }
        </span>
        {""} here yet.
      </p>
    </div>
  )
}

export default ComingSoon
