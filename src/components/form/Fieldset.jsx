const Fieldset = ({ legend, children }) => {
  return (
    <fieldset>
      <legend className="font-semibold text-md sm:text-lg mb-2">
        {legend}
      </legend>
      {children}
    </fieldset>
  )
}

export default Fieldset
