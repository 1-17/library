import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import classNames from "classnames"
import { useMobile } from "../../../hooks"
import Logo from "./Logo"
import Credits from "./Credits"
import Menu from "./Menu"

const Header = () => {
  const { menuOpen, toggleMenu } = useMobile()

  return (
    <header className="bg-light border-b-2 sticky top-0 px-4 pt-4 z-10">
      <div className="flex justify-between items-baseline gap-4 overflow-auto">
        <Logo />
        <Credits />
      </div>
      <div
        id="menu"
        role="menu"
        aria-labelledby="menu-button"
        aria-hidden={!menuOpen}
        className={classNames(
          "transition-all ease-in-out duration-1000",
          {
            "opacity-0 h-0 overflow-hidden": !menuOpen
          }
        )}
      >
        <Menu />
      </div>
      <button
        id="menu-button"
        aria-label={`${menuOpen ? "Close" : "Open"} menu`}
        aria-expanded={menuOpen}
        aria-controls="menu"
        onClick={toggleMenu} 
        className="text-2xl leading-10 w-full"
      >
        <span className="inline-block">
          {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
    </header>
  )
}

export default Header
