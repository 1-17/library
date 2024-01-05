import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../contexts"

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

const useList = () => {
  const menuOptions = {
    Components: {
      Layout: [
        {
          name: "Link",
          cover: "117k",
          description: "Ullamco consectetur Lorem do consequat aute est cupidatat ut dolor."
        },
        {
          name: "Button",
          cover: "117k",
          description: "Do minim deserunt proident nostrud elit ad sint elit."
        },
        {
          name: "Header",
          cover: "117k",
          description: "Lorem cupidatat proident nulla ad adipisicing tempor."
        }
      ],
      Form: [
        {
          name: "Form",
          cover: "117k",
          description: "In ex magna consectetur nulla aliqua et ex irure labore labore incididunt culpa Lorem ullamco."
        },
        {
          name: "Field",
          cover: "117k",
          description: "Mollit consequat dolore et ad duis do consequat nisi."
        },
        {
          name: "Stack",
          cover: "117k",
          description: "Minim irure minim culpa Lorem aute exercitation labore nulla incididunt duis cillum."
        }
      ]
    },
    Widgets: {
      Notion: [
        {
          name: "Typography",
          cover: "117k",
          description: "Deserunt sunt enim qui elit irure in."
        }
      ]
    }
  }

  const categories = Object.keys(menuOptions)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const subcategories = Object.keys(menuOptions[selectedCategory])
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0])

  const subcategoryContent = menuOptions[selectedCategory][selectedSubcategory]

  const changeSelectedCategory = (newCategory) => {
    const newSubcategories = Object.keys(menuOptions[newCategory])

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

  return {
    categories,
    subcategories,
    subcategoryContent,
    selectedCategory,
    selectedSubcategory,
    changeSelectedCategory,
    changeSelectedSubcategory
  }
}

const useCategory = () => useContext(CategoryContext)

export { useMobile, useList, useCategory }
