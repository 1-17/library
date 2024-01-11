import { useArticles } from "../../../hooks"
import Button from "../Button"

const Widget = () => {
  const { widgets } = useArticles()

  return (
    <Button to={widgets.route} external>
      Get embed link
    </Button>
  )
}

export default Widget
