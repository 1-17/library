import { useArticles } from "../../hooks"
import Button from "../layout/Button"

const ArticlesList = () => {
  const { articles } = useArticles()
  
  return (
    <section className="grid min-[450px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {
        articles.current.map(article =>
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
            <Button
              onClick={() => articles.changeSelectedArticle(article.name)}
              variant="secondary"
            >
              {
                articles.selectedCategory === "Components"
                  ? "Get code"
                  : articles.selectedCategory === "Widgets"
                    ? "Get widget"
                    : "See more"
              }
            </Button>
          </article>
        )
      }
    </section>
  )
}

export default ArticlesList
