import { useNavigate } from "react-router-dom"
import Button from "../Button"

const MenuSection = ({ title, array, currentElement, changeCurrentElement }) => {
  const navigate = useNavigate()

  return (
    <section>
      <h2 className="mb-2">
        {title}
      </h2>
      <ul className="grid min-[260px]:grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-2 gap-2">
        {
          array.map(element =>
            <li key={element}>
              <Button
                variant={currentElement === element && "primary"}
                size="sm"
                onClick={() => {
                  changeCurrentElement(element)
                  navigate("/")
                }}
                >
                {element}
              </Button>
            </li>
          )
        }
      </ul>
    </section>
  )
}

export default MenuSection
