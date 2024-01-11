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
  
  const techs = currentComponent && Object.keys(currentComponent.code)
  const code = currentComponent && currentComponent.code[selectedComponentTech]
  const component = currentComponent && currentComponent.component
  const changeSelectedTech = newTech => selectedComponentTech !== newTech && setSelectedComponentTech(newTech)

  useEffect(() => {
    currentComponent && setSelectedComponentTech(techs[0])
  }, [currentComponent])

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
    widgetsRoutes.find(route => (
      route.path.includes(formatToLowerCaseWithUnderscore(selectedArticle))
    )).path
  )
  
  return {
    articles: {
      categories: categories.map(capitalizeString),
      selectedCategory: capitalizeString(selectedCategory),
      changeSelectedCategory: changeSelectedCategory,
      subcategories: subcategories.map(capitalizeString),
      selectedSubcategory: capitalizeString(selectedSubcategory),
      changeSelectedSubcategory: changeSelectedSubcategory,
      current: currentArticles,
      selectedArticle: selectedArticle,
      changeSelectedArticle: changeSelectedArticle
    },
    components: {
      techs: techs,
      code: code,
      component: component,
      selectedTech: selectedComponentTech,
      changeSelectedTech: changeSelectedTech
    },
    widgets: {
      routes: widgetsRoutes,
      route: widgetRoute
    }
  }
}

export const _useArticles = () => useContext(CategoryContext)
