import classNames from "classnames"
import { useArticles } from "../../hooks"
import Link from "../../components/layout/Link"

const NavigationBar = () => {
  const { articles } = useArticles()

  return (
    <ul className="bg-light border-b-2 fixed -translate-x-4 md:-translate-x-8 -translate-y-20 md:-translate-y-[5.5rem] font-semibold text-md sm:text-lg w-full px-4 md:p-8 py-3 md:py-4 whitespace-nowrap z-10 *:inline">
      <li className="after:content-['_>_']">
        {articles.selectedCategory}
      </li>
      <li className={classNames(
          {
            "text-accent": !articles.selectedArticle,
            "after:content-['_>_']": articles.selectedArticle
          }
        )}>
        {
          articles.selectedArticle
            ? <Link to="/" onClick={() => articles.changeSelectedArticle("")} className="hover:text-accent">
                {articles.selectedSubcategory}
              </Link>
            : articles.selectedSubcategory
        }
      </li>
      {
        articles.selectedArticle && (
          <li className="text-accent">
            {articles.selectedArticle}
          </li>
        )
      }
    </ul>
  )
}

export default NavigationBar
