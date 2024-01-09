import { useContext, useEffect, useState } from "react"
import { CategoryContext, PopupContext } from "../contexts"
import { capitalizeString, formatArticleName, revertArticleNameFormat } from "../utils"
import articles from "../models/articles"
import CodeSection from "../components/articles/components/CodeSection"
import EmbedButton from "../components/articles/widgets/EmbedButton"

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
  const categories = Object.keys(articles)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const subcategories = Object.keys(articles[selectedCategory])
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0])

  const currentArticles = articles[selectedCategory][selectedSubcategory]

  const changeSelectedCategory = newCategory => {
    newCategory = newCategory.toLowerCase()
    
    if (selectedCategory !== newCategory) {
      setSelectedCategory(newCategory)
      setSelectedSubcategory(Object.keys(articles[newCategory])[0])
    }
  }
  
  const changeSelectedSubcategory = newSubcategory => {
    newSubcategory = newSubcategory.toLowerCase()
    
    if (selectedSubcategory !== newSubcategory) {
      setSelectedSubcategory(newSubcategory)
    }
  }

  const articlesRoutes = []
  const articlesNames = []

  Object.entries(articles).flatMap(([categories, subcategories]) => (
    Object.entries(subcategories).flatMap(([subcategory, articles]) => (
      articles.map(article => {
        articlesNames.push(article.name)
        const route = `${categories}/${subcategory}/${formatArticleName(article.name)}`

        currentArticles.map(subcategory => {
          if (route.includes(formatArticleName(subcategory.name))) {
            subcategory.route = route
          }
        })

        articlesRoutes.push({
          key: formatArticleName(article.name),
          path: route,
          component: route.includes("components") ? CodeSection : EmbedButton
        })
      })
    ))
  ))

  const articlePath = pathname => {
    const splittedPathname = pathname.split("/")
    const articleNameOnPath = splittedPathname[splittedPathname.length - 1]
    const unformattedArticleName = articlesNames.find(name => (
      name.toLowerCase() === revertArticleNameFormat(articleNameOnPath)
    ))
    
    return unformattedArticleName
  }
  
  return {
    categories: categories.map(capitalizeString),
    subcategories: subcategories.map(capitalizeString),
    currentArticles,
    selectedCategory: capitalizeString(selectedCategory),
    selectedSubcategory: capitalizeString(selectedSubcategory),
    changeSelectedCategory,
    changeSelectedSubcategory,
    articlesRoutes,
    articlePath
  }
}

const useArticles = () => useContext(CategoryContext)

const usePopupMethods = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupMessage, setPopupMessage] = useState({ title: "", description: "", cancelButton: null })

  const openPopup = (title, description, cancelButton) => {
    setPopupOpen(true)
    setPopupMessage({ title: title, description: description, cancelButton: cancelButton })
  }

  const closePopup = () => setPopupOpen(false)

  return { popupOpen, popupMessage, openPopup, closePopup }
}

const usePopup = () => useContext(PopupContext)

export { useMobile, useArticlesMethods, useArticles, usePopupMethods, usePopup }
