import { Outlet, useLocation } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
import { useArticles } from "../../hooks"
import Popup from "./Popup"
import AppBar from "./AppBar"
import Breadcrumb from "../layout/Breadcrumb"
import Link from "./Link"

const App = () => {
  const { pathname } = useLocation()
  const articles = useArticles()

  return (
    <>
      <Popup />
      <AppBar />
      <main className="grow mt-12 md:mt-14 p-4 md:p-8 pt-8 md:pt-10 pb-16 md:pb-20 overflow-auto">
        <Breadcrumb />
        {
          (articles.selectedArticle || pathname !== "/")
            ? <div className="max-w-2xl *:mt-8 first:*:mt-0">
                <Outlet />
                <Link
                  to="/"
                  onClick={() =>
                    articles.selectedArticle && articles.changeSelectedArticle("")
                  }
                  className="inline-block text-xl"
                >
                  <FaArrowLeft className="inline align-sub mr-3" />
                  Go back
                </Link>
              </div>
            : <Outlet />
        }
      </main>
    </>
  )
}

export default App
