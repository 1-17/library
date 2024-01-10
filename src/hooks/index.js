import { useContext, useEffect, useState } from "react"
import { CategoryContext, PopupContext } from "../contexts"
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
  const categories = Object.keys(articles)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const subcategories = Object.keys(articles[selectedCategory])
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0])

  const currentArticles = articles[selectedCategory][selectedSubcategory]

  const [selectedArticle, setSelectedArticle] = useState("")

  const changeSelectedCategory = newCategory => {
    newCategory = newCategory.toLowerCase()
    
    if (selectedCategory !== newCategory) {
      setSelectedCategory(newCategory)
      setSelectedSubcategory(Object.keys(articles[newCategory])[0])
      setSelectedArticle("")
    }
  }
  
  const changeSelectedSubcategory = newSubcategory => {
    newSubcategory = newSubcategory.toLowerCase()
    
    if (selectedSubcategory !== newSubcategory) {
      setSelectedSubcategory(newSubcategory)
      setSelectedArticle("")
    }
  }

  const changeSelectedArticle = newArticle => {
    if (selectedArticle !== newArticle) {
      setSelectedArticle(newArticle)
    }
  }
  
  return {
    categories: categories.map(capitalizeString),
    subcategories: subcategories.map(capitalizeString),
    currentArticles,
    selectedArticle,
    selectedCategory: capitalizeString(selectedCategory),
    selectedSubcategory: capitalizeString(selectedSubcategory),
    setSelectedArticle,
    changeSelectedCategory,
    changeSelectedSubcategory,
    changeSelectedArticle
  }
}

const useArticles = () => useContext(CategoryContext)

const usePopupMethods = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  
  const initialState = { title: "", description: "", okAction: null, cancelAction: null }
  const [popup, setPopup] = useState(initialState)

  const openPopup = (title, description, okAction, cancelAction) => {
    setPopupOpen(true)
    setPopup({ title: title, description: description, okAction: okAction, cancelAction: cancelAction })
  }

  const closePopup = () => {
    setPopupOpen(false)
    setPopup(initialState)
  }
  
  return { popupOpen, popup, openPopup, closePopup }
}

const usePopup = () => useContext(PopupContext)

export { useMobile, useArticlesMethods, useArticles, usePopupMethods, usePopup }
