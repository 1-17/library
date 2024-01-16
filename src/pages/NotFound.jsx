import { PiProhibitBold } from "react-icons/pi"
import Card from "../components/layout/Card"

const NotFound = () => {
  return (
    <Card
      icon={<PiProhibitBold />}
      title="Not found"
      description="The page you are trying to access does not exist"
    />
  )
}

export default NotFound
