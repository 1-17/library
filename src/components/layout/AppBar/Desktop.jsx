import Logo from "./Logo"
import Menu from "./Menu"
import Credits from "./Credits"

const Desktop = () => {
  return (
    <aside className="border-r sticky top-0 flex flex-col justify-around w-1/4 min-w-[260px] max-w-md h-screen p-4 shadow-md">
      <Logo />
      <Menu />
      <Credits />
    </aside>
  )
}

export default Desktop
