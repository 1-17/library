import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../contexts"
import list from "../models/list"

const useMobile = () => {
  const checkIfIsMobile = () => window.matchMedia("(max-width: 640px)").matches

  const [mobile, setMobile] = useState(checkIfIsMobile())
  const [menuOpen, setMenuOpen] = useState(true)
  
  useEffect(() => {
    const checkIfIsMobileInResize = () => setMobile(checkIfIsMobile())

    window.addEventListener("resize", checkIfIsMobileInResize)

    return () => window.removeEventListener("resize", checkIfIsMobileInResize)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return { mobile, menuOpen, toggleMenu }
}

const useContent = () => {
  const categories = Object.keys(list)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const subcategories = Object.keys(list[selectedCategory])
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0])

  const subcategoryContent = list[selectedCategory][selectedSubcategory]

  const changeSelectedCategory = (newCategory) => {
    const newSubcategories = Object.keys(list[newCategory])
    
    if (selectedCategory !== newCategory) {
      setSelectedCategory(newCategory)
      setSelectedSubcategory(newSubcategories[0])
    }
  }
  
  const changeSelectedSubcategory = (newSubcategory) => {
    if (selectedSubcategory !== newSubcategory) {
      setSelectedSubcategory(newSubcategory)
    }
  }

  const contentRoutes = new Array()

  Object.entries(list).flatMap(([key, value]) => (
    Object.entries(value).flatMap(([subcategory, contents]) =>
      contents.map(content => {
        const formatName = (mapOrigin) => (mapOrigin || content).name.split(" ").join("_").toLowerCase()
        const route = `${key}/${subcategory}/${formatName()}`.toLowerCase()

        subcategoryContent.map(subcategory => {
          if (route.includes(formatName(subcategory))) {
            subcategory.route = route
          }
        })

        contentRoutes.push({
          key: formatName(),
          path: route,
          component: formatName()
        })
      })
    )
  ))

  return {
    categories,
    subcategories,
    subcategoryContent,
    selectedCategory,
    selectedSubcategory,
    changeSelectedCategory,
    changeSelectedSubcategory,
    contentRoutes
  }
}

const useList = () => useContext(CategoryContext)

export { useMobile, useContent, useList }
