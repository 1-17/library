import Logo from "./Logo"
import Menu from "./Menu"
import Credits from "./Credits"

const Desktop = () => {
  return (
    <aside className="border-r sticky top-0 flex flex-col justify-around min-w-[260px] h-screen p-4 shadow-md overflow-y-auto">
      <Logo />
      <Menu />
      <Credits />
    </aside>
  )
}

export default Desktop
