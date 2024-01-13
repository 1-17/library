import { useNavigate } from "react-router-dom"
import { useArticles } from "../../../hooks"
import Button from "../Button"

const Menu = () => {
  const navigate = useNavigate()
  const { articles } = useArticles()
  
  return (
    <nav className="text-sm my-4 *:mt-4 first:*:mt-0">
      {
        [articles.categories, articles.subcategories].map((item, i) => {
          const title = i === 0 ? "Categories" : "Subcategories"
          const selectedItem = articles[i === 0 ? "selectedCategory" : "selectedSubcategory"]
          const changeItem = articles[i === 0 ? "changeSelectedCategory" : "changeSelectedSubcategory"]

          return (
            item.length
              ? <section key={i}>
                  <h2 className="mb-2">
                    {title}
                  </h2>
                  <ul className="grid min-[260px]:grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-2 gap-2">
                    {
                      item.map(listItem =>
                        <li key={listItem}>
                          <Button
                            variant={selectedItem === listItem ? "primary" : "secondary"}
                            size="sm"
                            onClick={() => {
                              changeItem(listItem)
                              navigate("/")
                            }}
                            >
                            {listItem}
                          </Button>
                        </li>
                      )
                    }
                  </ul>
                </section>
              : null
          )
        })
      }
    </nav>
  )
}

export default Menu
