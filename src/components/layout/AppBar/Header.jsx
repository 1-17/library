import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import classNames from "classnames"
import { useMobile } from "../../../hooks"
import Logo from "./Logo"
import Menu from "./Menu"
import Credits from "./Credits"

const Header = () => {
  const { menuOpen, toggleMenu } = useMobile()

  return (
    <header className="bg-light sticky top-0 px-4 pt-4 shadow-md">
      <Logo />
      <div
        id="menu"
        role="menu"
        aria-labelledby="menu-button"
        aria-hidden={menuOpen ? false: true}
        className={classNames(
          "transition-all ease-in-out duration-1000",
          {
            "opacity-0 h-0 overflow-hidden": !menuOpen
          }
          )}
        >
        <Menu />
        <Credits />
      </div>
      <button
        id="menu-button"
        aria-label={`${menuOpen ? "Close" : "Open"} menu`}
        aria-expanded={menuOpen ? true : false}
        aria-controls="menu"
        onClick={toggleMenu} 
        className="text-2xl w-full py-1"
        >
          <span className="inline-block">
            {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
      </button>
    </header>
  )
}

export default Header
