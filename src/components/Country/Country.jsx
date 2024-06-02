const Country = ({ country }) => {
  return (
    <article className="country">
      <figure>
        <img src={country.flags.png} alt={country.flags.alt} />
      </figure>
      <h1>{country.name.common}</h1>
      <ul>
        <li>Population: {country.population}</li>
        <li>Region: {country.region}</li>
        <li>Capital: {country.capital[0]}</li>
      </ul>
    </article>
  )
}

export default Country;
