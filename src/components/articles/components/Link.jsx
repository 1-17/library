import LinkComponent from "../../layout/Link"

const Link = () => {
  const website = "google.com"
  const route = "/example"

  return (
    <div className="*:mb-2 last:*:mb-0">
      <p>
        <LinkComponent href={website} external className="underline">
          Click here
        </LinkComponent>
        {""} to open <span className="italic">{website}</span> on a new tab.
      </p>
      <p>
        <LinkComponent to={route} className="underline">
          Click here
        </LinkComponent>
        {""} to open a route of this app on this tab.
      </p>
    </div>
  )
}

export default Link
