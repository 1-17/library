import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../contexts"
import { capitalizeString, formatArticleNameToRoutePath } from "../utils"
import articles from "../models/articles"
import components from "../models/components"

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
  
  const currentComponent = (selectedCategory === "components" && selectedArticle) && (
    components.find(component => {
      const articleId = currentArticles.find(article => article.name === selectedArticle).id
      return component.id === articleId
    })
  )
  
  const preview = currentComponent && currentComponent.preview
  const codes = currentComponent && currentComponent.codes
  const techs = codes && Object.keys(currentComponent.codes.component)
  const code = techs && currentComponent.codes.component[selectedComponentTech]
  const usage = codes && currentComponent.codes.usage
  const changeSelectedTech = newTech => selectedComponentTech !== newTech && setSelectedComponentTech(newTech)

  useEffect(() => {
    (currentComponent && techs) && setSelectedComponentTech(techs[0])
  }, [currentComponent])

  const widgetRoutes = []

  Object.entries(articles).map(([categories, subcategories]) => {
    categories.includes("widgets") && (
      widgetRoutes.push(
        ...Object.entries(subcategories).flatMap(([subcategory, articles]) => (
          articles.map(article => (
            {
              path: `${categories}/${subcategory}/${formatArticleNameToRoutePath(article.name)}`,
              element: article.name
            }
          ))
        ))
      )
    )
  })

  const widgetRoute = (selectedCategory === "widgets" && selectedArticle) && (
    widgetRoutes.find(route => (
      route.path.includes(formatArticleNameToRoutePath(selectedArticle))
    )).path
  )
  
  return {
    articles: {
      categories: categories.map(capitalizeString),
      selectedCategory: capitalizeString(selectedCategory),
      changeSelectedCategory,
      subcategories: subcategories.map(capitalizeString),
      selectedSubcategory: selectedSubcategory && capitalizeString(selectedSubcategory),
      changeSelectedSubcategory,
      current: currentArticles || [],
      selectedArticle,
      changeSelectedArticle
    },
    component: {
      preview,
      techs,
      code,
      usage,
      selectedTech: selectedComponentTech,
      changeSelectedTech
    },
    widget: {
      routes: widgetRoutes,
      route: widgetRoute
    }
  }
}

export const _useArticles = () => useContext(CategoryContext)
