import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../contexts"
import { capitalizeString, formatArticleNameToRoutePath } from "../utils"
import articles from "../models/articles"

export const _useArticlesMethods = () => {
  const categories = Object.keys(articles)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const subcategories = Object.keys(articles[selectedCategory])
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0])

  const currentArticles = articles[selectedCategory][selectedSubcategory]

  const [selectedArticle, setSelectedArticle] = useState("")

  const [selectedComponentTech, setSelectedComponentTech] = useState("")
  
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

  const currentComponent = (selectedCategory === "components" && selectedSubcategory && selectedArticle) && (
    articles.components[selectedSubcategory].find(article => article.name === selectedArticle)
  )

  const component = {}

  component.preview = currentComponent && currentComponent.preview
  component.techs = (currentComponent && currentComponent.codes && currentComponent.codes.component) && Object.keys(currentComponent.codes.component)
  component.selectedTech = selectedComponentTech
  component.changeSelectedTech = newTech => selectedComponentTech !== newTech && setSelectedComponentTech(newTech)
  component.code = component.techs && currentComponent.codes.component[selectedComponentTech]
  component.usage = (currentComponent && currentComponent.codes) && currentComponent.codes.usage

  useEffect(() => {
    (currentComponent && component.techs) && setSelectedComponentTech(component.techs[0])
  }, [currentComponent])

  const widget = {}
  widget.routes = []

  Object.entries(articles).map(([categories, subcategories]) => {
    categories.includes("widgets") && (
      widget.routes.push(
        ...Object.entries(subcategories).flatMap(([subcategory, articles]) => (
          articles.map((article, i) => (
            {
              key: i,
              path: `${categories}/${subcategory}/${formatArticleNameToRoutePath(article.name)}`
            }
          ))
        ))
      )
    )
  })

  widget.route = (selectedCategory === "widgets" && selectedArticle) && (
    document.location.href + widget.routes.find(route => route.path.includes(formatArticleNameToRoutePath(selectedArticle))).path
  )
  
  return {
    categories: categories.map(capitalizeString),
    selectedCategory: capitalizeString(selectedCategory),
    changeSelectedCategory,
    subcategories: subcategories.map(capitalizeString),
    selectedSubcategory: selectedSubcategory && capitalizeString(selectedSubcategory),
    changeSelectedSubcategory,
    current: currentArticles || [],
    selectedArticle,
    changeSelectedArticle,
    component,
    widget
  }
}

export const _useArticles = () => useContext(CategoryContext)
