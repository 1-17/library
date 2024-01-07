import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../contexts"
import { capitalizeString } from "../utils"
import articles from "../models/articles"

const useMobile = () => {
  const checkIfIsMobile = () => window.matchMedia("(max-width: 640px)").matches

  const [mobile, setMobile] = useState(checkIfIsMobile)
  const [menuOpen, setMenuOpen] = useState(true)
  
  useEffect(() => {
    const checkIfIsMobileInResize = () => setMobile(checkIfIsMobile)

    window.addEventListener("resize", checkIfIsMobileInResize)

    return () => window.removeEventListener("resize", checkIfIsMobileInResize)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return { mobile, menuOpen, toggleMenu }
}

const useArticlesMethods = () => {
  const categories = Object.keys(articles).map(capitalizeString)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const subcategories = Object.keys(articles[selectedCategory.toLowerCase()]).map(capitalizeString)
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0])

  const currentArticles = articles[selectedCategory.toLowerCase()][selectedSubcategory.toLowerCase()]

  const changeSelectedCategory = newCategory => {
    const newSubcategories = Object.keys(articles[newCategory.toLowerCase()])
    const newSubcategory = capitalizeString(newSubcategories[0])
    
    if (selectedCategory !== newCategory) {
      setSelectedCategory(newCategory)
      setSelectedSubcategory(newSubcategory)
    }
  }
  
  const changeSelectedSubcategory = newSubcategory => {
    if (selectedSubcategory !== newSubcategory) {
      setSelectedSubcategory(newSubcategory)
    }
  }

  const articlesRoutes = []

  Object.entries(articles).flatMap(([categories, subcategories]) => (
    Object.entries(subcategories).flatMap(([subcategory, articles]) => (
      articles.map(article => {
        const formatName = newMap => (newMap || article).name.split(" ").join("_").toLowerCase()
        const route = `${categories}/${subcategory}/${formatName()}`

        currentArticles.map(subcategory => {
          if (route.includes(formatName(subcategory))) {
            subcategory.route = route
          }
        })

        articlesRoutes.push({
          key: formatName(),
          path: route,
          component: formatName()
        })
      })
    ))
  ))

  const articlePath = pathname => {
    const path = {}

    if (pathname !== "/") {
      path.parts = pathname.split("/")
      path.name = path.parts[path.parts.length - 1]
      path.articleName = capitalizeString(path.name)
      path.isArticle = path.parts.includes(path.articleName.toLowerCase())
    }

    return path
  }

  return {
    categories,
    subcategories,
    currentArticles,
    selectedCategory,
    selectedSubcategory,
    changeSelectedCategory,
    changeSelectedSubcategory,
    articlesRoutes,
    articlePath
  }
}

const useArticles = () => useContext(CategoryContext)

export { useMobile, useArticlesMethods, useArticles }
