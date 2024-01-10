import { useArticles } from "../../../../hooks"
import Button from "../../Button"

const EmbedButton = () => {
  const { widgetRoute } = useArticles()

  return (
    <Button to={widgetRoute} target="_blank" rel="noopener noreferrer">
      Get embed link
    </Button>
  )
}

export default EmbedButton
