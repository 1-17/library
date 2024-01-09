import React from "react"
import ReactDOM from "react-dom/client"
import Contexts from "./contexts"
import Pages from "./pages"
import "./assets/styles/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contexts>
      <Pages />
    </Contexts>
  </React.StrictMode>,
)
