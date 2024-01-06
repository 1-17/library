import { useList } from "../../hooks"
import Button from "./Button"

const ContentList = () => {
  const { selectedCategory, selectedSubcategory, subcategoryContent } = useList()
  
  return (
    <>
      <h2 className="font-semibold text-lg sm:text-xl mb-4">
        {`${selectedCategory} > ${selectedSubcategory}`}
      </h2>
      <ul className="grid min-[450px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          subcategoryContent.map(content =>
            <li key={content.name}>
              <img src={`src/assets/img/${content.cover}.png`} alt={content.name} className="w-full" />
              <div className="my-3">
                <h3 className="font-semibold text-md sm:text-lg">
                  {content.name}
                </h3>
                <p>
                  {content.description}
                </p>
              </div>
              <Button
                id={content.name.toLowerCase().split(" ").join("_")}
                onClick={e => console.log(e.target.id)}
                className="leading-7 sm:leading-8"
                >
                Get code
              </Button>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default ContentList
