import { useArticles, usePopup } from "../../hooks"
import Button from "../layout/Button"

const Widget = () => {
  const articles = useArticles()
  const { copyToClipboard } = usePopup()

  return (
    <>
      <articles.widget.component />
      <articles.widget.controls />
      <Button
        popupTrigger
        onClick={() => copyToClipboard(articles.widget.route, "Widget link")}
        variant="secondary"
        className="max-w-[15rem]"
      >
        Get embed link
      </Button>
      {
        articles.selectedSubcategory === "Notion" && (
          <div className="mt-6">
            <h2 className="font-semibold text-lg sm:text-xl mb-1">
              How to use:
            </h2>
            <p>In exercitation elit cupidatat officia adipisicing.</p>
          </div>
        )
      }
    </>
  )
}

export default Widget
