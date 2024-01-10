import { useContext, useState } from "react"
import { CategoryContext } from "../contexts"
import { capitalizeString, formatToLowerCaseWithUnderscore } from "../utils"
import articles from "../models/articles"

export const _useArticlesMethods = () => {
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

  const widgetsRoutes = []

  Object.entries(articles).map(([categories, subcategories]) => {
    categories.includes("widgets") && (
      widgetsRoutes.push(
        ...Object.entries(subcategories).flatMap(([subcategory, articles]) => (
          articles.map(article => (
            {
              path: `${categories}/${subcategory}/${formatToLowerCaseWithUnderscore(article.name)}`,
              element: article.name
            }
          ))
        ))
      )
    )
  })

  const widgetRoute = (selectedCategory === "widgets" && selectedArticle) && (
    widgetsRoutes.find(route => route.path.includes(formatToLowerCaseWithUnderscore(selectedArticle))).path
  )
  
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
    changeSelectedArticle,
    widgetsRoutes,
    widgetRoute
  }
}

export const _useArticles = () => useContext(CategoryContext)
