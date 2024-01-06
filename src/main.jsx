import React from "react"
import ReactDOM from "react-dom/client"
import Contexts from "./contexts"
import Pages from "./pages"
import "./assets/styles/main.css"

const root = document.getElementById("root")

document.documentElement.classList.add("bg-light", "text-dark")
root.classList.add("flex", "max-sm:flex-col")

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Contexts>
      <Pages />
    </Contexts>
  </React.StrictMode>,
)
