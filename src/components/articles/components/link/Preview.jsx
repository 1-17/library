import Link from "../../../layout/Link"

const Preview = () => {
  const website = "google.com"
  const route = "/example"

  return (
    <div className="*:mb-2 last:*:mb-0">
      <p>
        <Link href={website} external className="underline">
          Click here
        </Link>
        {""} to open <span className="italic">{website}</span> on a new tab.
      </p>
      <p>
        <Link to={route} className="underline">
          Click here
        </Link>
        {""} to open a route on this tab.
      </p>
    </div>
  )
}

export default Preview
