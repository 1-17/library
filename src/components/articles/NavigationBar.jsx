import { useLocation, useNavigate } from "react-router-dom"
import classNames from "classnames"
import { useArticles } from "../../hooks"

const NavigationBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { selectedCategory, selectedSubcategory, articlePath } = useArticles()
  const path = articlePath(pathname)

  return (
    <ul className="bg-light border-b-2 fixed -translate-x-4 -translate-y-16 font-semibold text-md sm:text-lg w-full px-4 py-2 z-10 *:inline">
      <li className="after:content-['_>_']">
        {selectedCategory}
      </li>
      <li className={classNames(
          {
            "text-accent": !path.isArticle,
            "after:content-['_>_']": path.isArticle
          }
        )}>
        {
          path.isArticle
            ? <button onClick={() => navigate("/")} className="hover:text-accent">
                {selectedSubcategory}
              </button>
            : selectedSubcategory
        }
      </li>
      {
        path.isArticle && (
          <li { ...path.articleName && { className: "text-accent" } }>
            {path.articleName}
          </li>
        )
      }
    </ul>
  )
}

export default NavigationBar
