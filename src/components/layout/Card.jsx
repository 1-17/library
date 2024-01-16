const Card = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="text-7xl">
          {icon}
        </div>
        <div className="grow">
          <h2 className="font-semibold text-lg sm:text-xl mb-1">
            {`${title}!`}
          </h2>
          <p>
            {`${description}.`}
          </p>
        </div>
      </div>
    </>
  )
}

export default Card
