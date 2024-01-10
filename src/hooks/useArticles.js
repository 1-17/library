import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../contexts"
import { capitalizeString, formatToLowerCaseWithUnderscore } from "../utils"
import articles from "../models/articles"
import components from "../models/components"

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

  const [selectedComponentTech, setSelectedComponentTech] = useState("")

  const currentComponent = (selectedCategory === "components" && selectedArticle) && (
    components.find(component => {
      const articleId = currentArticles.find(article => article.name === selectedArticle).id
      return component.id === articleId
    })
  )
  
  const component = {}
  component.techs = currentComponent && Object.keys(currentComponent.code)
  component.code = currentComponent && currentComponent.code[selectedComponentTech]
  component.selectedTech = selectedComponentTech
  component.changeSelectedTech = newTech => component.selectedTech !== newTech && setSelectedComponentTech(newTech)

  useEffect(() => {
    currentComponent && setSelectedComponentTech(component.techs[0])
  }, [currentComponent])

  const widget = {}
  widget.routes = []

  Object.entries(articles).map(([categories, subcategories]) => {
    categories.includes("widgets") && (
      widget.routes.push(
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

  widget.route = (selectedCategory === "widgets" && selectedArticle) && (
    widget.routes.find(route => (
      route.path.includes(formatToLowerCaseWithUnderscore(selectedArticle))
    )).path
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
    component,
    widget
  }
}

export const _useArticles = () => useContext(CategoryContext)
