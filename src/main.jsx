import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/layout/App"
import "./assets/styles/main.css"

const root = document.getElementById("root")

document.documentElement.classList.add("bg-light", "text-dark")
root.classList.add("flex", "max-sm:flex-col", "max-sm:min-h-screen")

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
