import { useArticles } from "../../../hooks"
import Button from "../Button"

const EmbedButton = () => {
  const { widget } = useArticles()

  return (
    <Button to={widget.route} target="_blank" rel="noopener noreferrer">
      Get embed link
    </Button>
  )
}

export default EmbedButton
