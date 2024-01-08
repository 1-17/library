import { useArticles } from "../../hooks"
import Button from "../layout/Button"

const ArticlesList = () => {
  const { currentArticles } = useArticles()
  
  return (
    <section className="grid min-[450px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        currentArticles.map(article =>
          <article key={article.name}>
            <img src={`src/assets/img/${article.cover}.png`} alt={article.name} />
            <div className="my-3">
              <h3 className="font-semibold text-md sm:text-lg">
                {article.name}
              </h3>
              <p>
                {article.description}
              </p>
            </div>
            <Button to={article.route}>
              Get code
            </Button>
          </article>
        )
      }
    </section>
  )
}

export default ArticlesList
