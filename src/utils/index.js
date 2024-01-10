export const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1)

export const formatArticleName = name => name.split(" ").join("_").toLowerCase()

export const copyToClipboard = (text, openPopupFunction, okButtonAction) => {
  navigator.clipboard.writeText(text)
    .then(() => openPopupFunction("Success!", "Code copied to clipboard.", okButtonAction))
    .catch(() => openPopupFunction("Failed to copy!", "Something went wrong. Please, try again.", okButtonAction))
}
