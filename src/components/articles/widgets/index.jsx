import { useArticles, usePopup } from "../../../hooks"
import Button from "../../layout/Button"

const Widget = () => {
  const { widget, articles } = useArticles()
  const { copyToClipboard } = usePopup()

  return (
    <>
      <Button
        popupTrigger
        onClick={() => copyToClipboard(document.location.href + widget.route, "Widget link")}
        variant="secondary"
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
