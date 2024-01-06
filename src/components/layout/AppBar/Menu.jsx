import { useNavigate } from "react-router-dom"
import { useList } from "../../../hooks"
import Button from "../Button"

const Menu = () => {
  const navigate = useNavigate()
  const { categories, subcategories, selectedCategory, selectedSubcategory, changeSelectedCategory, changeSelectedSubcategory } = useList()

  return (
    <nav className="text-sm my-4">
      <section>
        <h2 className="mb-2">
          Categories
        </h2>
        <ul className="grid min-[360px]:grid-cols-3 sm:grid-cols-2 gap-2">
          {
            categories.map(category =>
              <li key={category}>
                <Button
                  secondary={selectedCategory === category}
                  onClick={() => {
                    changeSelectedCategory(category)
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
      <section className="mt-6">
        <h2 className="mb-2">
          {selectedCategory}
        </h2>
        <ul className="grid min-[360px]:grid-cols-3 sm:grid-cols-2 gap-2">
          {
            subcategories.map(subcategory =>
              <li key={subcategory}>
                <Button
                  secondary
                  onClick={() => {
                    changeSelectedSubcategory(subcategory)
                    navigate("/")
                  }}
                  className={{
                    "before:content-['★_'] before:whitespace-nowrap": selectedSubcategory === subcategory
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
