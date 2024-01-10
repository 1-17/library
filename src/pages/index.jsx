import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "../components/layout/App"

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </Router>
  )
}

export default Pages
