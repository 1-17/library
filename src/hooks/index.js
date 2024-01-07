import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../contexts"
import articles from "../models/articles"

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

const useArticlesMethods = () => {
  const categories = Object.keys(articles)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const subcategories = Object.keys(articles[selectedCategory])
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0])

  const [selectedArticle, setSelectedArticle] = useState("")

  const currentArticles = articles[selectedCategory][selectedSubcategory]

  const changeSelectedCategory = (newCategory) => {
    const newSubcategories = Object.keys(articles[newCategory])
    
    if (selectedCategory !== newCategory) {
      setSelectedCategory(newCategory)
      setSelectedSubcategory(newSubcategories[0])
    }

    setSelectedArticle("")
  }
  
  const changeSelectedSubcategory = (newSubcategory) => {
    if (selectedSubcategory !== newSubcategory) {
      setSelectedSubcategory(newSubcategory)
    }

    setSelectedArticle("")
  }

  const articlesRoutes = new Array()

  Object.entries(articles).flatMap(([key, value]) => (
    Object.entries(value).flatMap(([subcategory, articles]) =>
      articles.map(article => {
        const formatName = (mapOrigin) => (mapOrigin || article).name.split(" ").join("_").toLowerCase()
        const route = `${key}/${subcategory}/${formatName()}`.toLowerCase()

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
    )
  ))

  return {
    categories,
    subcategories,
    currentArticles,
    selectedCategory,
    selectedSubcategory,
    changeSelectedCategory,
    changeSelectedSubcategory,
    selectedArticle,
    setSelectedArticle,
    articlesRoutes
  }
}

const useArticles = () => useContext(CategoryContext)

export { useMobile, useArticlesMethods, useArticles }
