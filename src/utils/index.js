export const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1)

export const formatToLowerCaseWithUnderscore = string => string.split(" ").join("_").toLowerCase()

export const formatToUpperCaseOrCapitalizeWithPlusSign = string => {
  if (string === "html" || string === "css") {
    return string.toUpperCase()
  }

  if (string.includes("_")) {
    return string.split("_").map(capitalizeString).join(" + ")
  }

  return capitalizeString(string)
}

export const copyToClipboard = (text, openPopupFunction, okButtonAction) => {
  navigator.clipboard.writeText(text)
    .then(() => openPopupFunction("Success!", "Code copied to clipboard.", okButtonAction))
    .catch(() => openPopupFunction("Failed to copy!", "Something went wrong. Please, try again.", okButtonAction))
}
