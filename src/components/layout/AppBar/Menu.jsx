import { useArticles } from "../../../hooks"
import MenuSection from "./MenuSection"

const Menu = () => {
  const { categories, subcategories, selectedCategory, selectedSubcategory, changeSelectedCategory, changeSelectedSubcategory } = useArticles()
  
  return (
    <nav className="text-sm my-4 last:*:mt-4">
      <MenuSection title="Categories" array={categories} currentElement={selectedCategory} changeCurrentElement={changeSelectedCategory} />
      <MenuSection title="Subcategories" array={subcategories} currentElement={selectedSubcategory} changeCurrentElement={changeSelectedSubcategory} />
    </nav>
  )
}

export default Menu
