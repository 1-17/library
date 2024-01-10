import { useArticles } from "../../../hooks"
import Button from "../Button"

const ArticlesList = () => {
  const { currentArticles, selectedCategory, setSelectedArticle } = useArticles()
  
  return (
    <section { ...currentArticles.length && {
        className: "grid min-[450px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      }}>
      {
        currentArticles.length
          ? currentArticles.map(article =>
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
                <Button onClick={() => setSelectedArticle(article.name)}>
                  {selectedCategory === "Components" && "Get code"}
                  {selectedCategory === "Widgets" && "Get widget"}
                </Button>
              </article>
            )
          : <>
              <h2 className="font-semibold text-lg sm:text-xl">
                Coming soon!
              </h2>
              <p>
                {`No ${selectedCategory.toLowerCase()} here yet.`}
              </p>
            </>
      }
    </section>
  )
}

export default ArticlesList
