import classNames from "classnames"
import { useArticles } from "../../hooks"
import Link from "../../components/layout/Link"

const NavigationBar = () => {
  const { selectedCategory, selectedSubcategory, selectedArticle, setSelectedArticle } = useArticles()

  return (
    <ul className="bg-light border-b-2 fixed -translate-x-4 -translate-y-16 font-semibold text-md sm:text-lg w-full px-4 py-2 whitespace-nowrap z-10 *:inline">
      <li className="after:content-['_>_']">
        {selectedCategory}
      </li>
      <li className={classNames(
          {
            "text-accent": !selectedArticle,
            "after:content-['_>_']": selectedArticle
          }
        )}>
        {
          selectedArticle
            ? <Link to="/" onClick={() => setSelectedArticle("")} className="hover:text-accent">
                {selectedSubcategory}
              </Link>
            : selectedSubcategory
        }
      </li>
      {
        selectedArticle && (
          <li className="text-accent">
            {selectedArticle}
          </li>
        )
      }
    </ul>
  )
}

export default NavigationBar
