import Link from "../Link"

const Credits = () => {
  return (
    <p className="text-xs sm:text-center whitespace-nowrap">
      Made by
      <Link href="github.com/1-17" className="font-bold text-accent hover:brightness-90">
        117k
      </Link>
    </p>
  )
}

export default Credits
