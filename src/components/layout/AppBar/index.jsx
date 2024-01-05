import { useMobile } from "../../../hooks"
import Mobile from "./Mobile"
import Desktop from "./Desktop"

const AppBar = () => {
  const { mobile } = useMobile()

  return (
    mobile ? <Mobile /> : <Desktop />
  )
}

export default AppBar
