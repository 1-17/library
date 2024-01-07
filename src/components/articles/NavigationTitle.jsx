import { useArticles } from "../../hooks"

const NavigationTitle = () => {
  const { selectedCategory, selectedSubcategory, selectedArticle } = useArticles()

  return (
    <ul className="*:inline font-semibold text-lg sm:text-xl mb-4 *:after:content-['_>_'] last:*:after:content-['']">
      <li>
        {selectedCategory}
      </li>
      <li { ...!selectedArticle && { className: "text-accent" } }>
        {selectedSubcategory}
      </li>
      {selectedArticle &&
        <li { ...selectedArticle && { className: "text-accent" } }>
          {selectedArticle}
        </li>
      }
    </ul>
  )
}

export default NavigationTitle
