import { useNavigate } from "react-router-dom"
import { useArticles } from "../../../hooks"
import Button from "../Button"

const Menu = () => {
  const navigate = useNavigate()
  const { articles } = useArticles()
  
  return (
    <nav className="text-sm my-4 last:*:mt-4">
      <section>
        <h2 className="mb-2">
          Categories
        </h2>
        <ul className="grid min-[260px]:grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-2 gap-2">
          {
            articles.categories.map(category =>
              <li key={category}>
                <Button
                  variant={articles.selectedCategory === category && "primary"}
                  size="sm"
                  onClick={() => {
                    articles.changeSelectedCategory(category)
                    navigate("/")
                  }}
                  >
                  {category}
                </Button>
              </li>
            )
          }
        </ul>
      </section>
      <section>
        <h2 className="mb-2">
          Subcategories
        </h2>
        <ul className="grid min-[260px]:grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-2 gap-2">
          {
            articles.subcategories.map(subcategory =>
              <li key={subcategory}>
                <Button
                  variant={articles.selectedSubcategory === subcategory && "primary"}
                  size="sm"
                  onClick={() => {
                    articles.changeSelectedSubcategory(subcategory)
                    navigate("/")
                  }}
                  >
                  {subcategory}
                </Button>
              </li>
            )
          }
        </ul>
      </section>
    </nav>
  )
}

export default Menu
