import Style from './country.module.css'

const Country = ({country}) => {
    // const {name} = countryn;
  return (
    <>
    <div className="Style.country border-gray-700 border-2 rounded-lg p-5 mb-5 mr-5">
      Country: {country.name.common}
      <img src={country.flags.png} className="mt-3" alt={country.name.common} />
    </div>
    </>
  )
}

export default Country