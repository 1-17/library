import Link from "../Link"

const Credits = () => {
  return (
    <p className="text-xs sm:text-center whitespace-nowrap">
      Made by {""}
      <Link href="github.com/1-17" external className="font-bold text-accent">
        117k
      </Link>
    </p>
  )
}

export default Credits
