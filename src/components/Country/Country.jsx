import styles from "./scss/Country.module.css";

const Country = ({ country, toggleTheme }) => {
  return (
    <div className={styles.countryContainer} style={toggleTheme ? null : {backgroundColor: "#2b3743", color: "white"}}>
      <figure>
        <img src={country.flags.png} alt={country.flags.alt} />
      </figure>
      <section className={styles.countryInfo} >
        <h1>{country.name.common}</h1>
        <ul>
          <li><span>Population:</span> {country.population}</li>
          <li><span>Region:</span> {country.region}</li>
          <li><span>Capital:</span> {country.capital[0]}</li>
        </ul>
      </section>
    </div>
  )
}

export default Country;
