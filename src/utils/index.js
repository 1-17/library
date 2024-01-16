export const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1)

export const formatArticleNameToRoutePath = string => string.split(" ").join("_").toLowerCase()

export const formatTechName = string => {
  if (["html", "css"].includes(string)) {
    return string.toUpperCase()
  }

  if (string.includes("_")) {
    return string.split("_").map(capitalizeString).join(" + ")
  }

  return capitalizeString(string)
}
