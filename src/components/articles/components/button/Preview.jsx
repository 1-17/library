import Button from "../../../layout/Button"

const Preview = () => {
  const website = "google.com"
  const route = "/example"

  return (
    <>
      <h3 className="mb-3">
        Variants
      </h3>
      <div className="grid min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <p className="text-sm mb-1">
            Primary
          </p>
          <Button href={website} external variant="primary">
            Go to {website}
          </Button>
        </div>
        <div>
          <p className="text-sm mb-1">
            Secondary
          </p>
          <Button to={route} variant="secondary">
            Go to {route}
          </Button>
        </div>
        <div>
          <p className="text-sm mb-1">
            Filled
          </p>
          <Button onClick={() => alert("Hello! You clicked me.")} variant="filled">
            Click here
          </Button>
        </div>
      </div>
    </>
  )
}

export default Preview
