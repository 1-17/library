import { useArticles, usePopup } from "../../../hooks"
import { copyToClipboard } from "../../../utils"
import Button from "../../layout/Button"

const Widget = () => {
  const { widget, articles } = useArticles()
  const { openPopup, closePopup } = usePopup()

  return (
    <>
      <Button
        popupTrigger
        onClick={() => copyToClipboard(widget.route, "Widget link", openPopup, closePopup)}
        variant="secondary"
        external
      >
        Get embed link
      </Button>
      {
        articles.selectedSubcategory === "Notion" && (
          <div className="mt-8">
            <h3 className="font-semibold text-lg">
              How to use:
            </h3>
            <p>In exercitation elit cupidatat officia adipisicing.</p>
          </div>
        )
      }
    </>
  )
}

export default Widget
