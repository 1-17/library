import Logo from "./Logo"
import Menu from "./Menu"
import Credits from "./Credits"

const Sidebar = () => {
  return (
    <aside className="border-r-2 sticky top-0 flex flex-col justify-around min-w-fit h-screen p-4 overflow-y-auto">
      <Logo />
      <Menu />
      <Credits />
    </aside>
  )
}

export default Sidebar
