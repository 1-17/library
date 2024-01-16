import Link from "../Link"

const Credits = () => {
  return (
    <p className="text-sm sm:text-center whitespace-nowrap">
      Made by {""}
      <Link href="github.com/1-17" external className="text-accent">
        <span className="font-bold">117</span>
      </Link>
    </p>
  )
}

export default Credits
