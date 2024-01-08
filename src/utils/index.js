const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1)
const formatArticleName = name => name.split(" ").join("_").toLowerCase()
const revertArticleNameFormat = name => name.split("_").join(" ").toLowerCase()

export { capitalizeString, formatArticleName, revertArticleNameFormat }
