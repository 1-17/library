import { useList } from "../../../hooks"
import Button from "../Button"

const Menu = () => {
  const { categories, subcategories, selectedCategory, selectedSubcategory, changeSelectedCategory, changeSelectedSubcategory } = useList()

  return (
    <nav className="text-sm w-full max-sm:my-4">
      <section>
        <h2 className="mb-2">
          Categories
        </h2>
        <ul className="grid xs:grid-cols-3 sm:grid-cols-2 gap-2">
          {
            categories.map(category =>
              <li key={category}>
                <Button
                  secondary={selectedCategory === category}
                  onClick={() => changeSelectedCategory(category)}
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
          {selectedCategory}:
        </h2>
        <ul className="grid xs:grid-cols-3 sm:grid-cols-2 gap-2">
          {
            subcategories.map(subcategory =>
              <li key={subcategory}>
                <Button
                  secondary
                  onClick={() => changeSelectedSubcategory(subcategory)}
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
