const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1)

const formatArticleName = name => name.split(" ").join("_").toLowerCase()
const revertArticleNameFormat = name => name.split("_").join(" ").toLowerCase()

const copyToClipboard = (text, openPopupFunction) => {
  navigator.clipboard.writeText(text)
    .then(() => openPopupFunction("Success!", "Code copied to clipboard.", true))
    .catch(() => openPopupFunction("Failed to copy!", "Something went wrong. Please, try again.", true))
}

export { capitalizeString, formatArticleName, revertArticleNameFormat, copyToClipboard }
