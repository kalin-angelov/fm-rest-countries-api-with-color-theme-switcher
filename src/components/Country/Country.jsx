import styles from "./scss/Country.module.css";

import { useNavigate } from "react-router-dom";

const Country = ({ country, dark }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/details/${country.name}`, {state: {
      countryInfo: country
    }});
  }

  return (
    <div className={styles.countryContainer} onClick={navigateTo} title={`Click to see full details for ${country.name}`} style={dark ? dark : null}>
      <figure>
        <img src={country.flags.png} alt={`${country.name} flag`} />
      </figure>
      <div className={styles.countryInfo} >
        <p>{country.name}</p>
        <ul>
          <li><span>Population:</span> {country.population}</li>
          <li><span>Region:</span> {country.region}</li>
          <li><span>Capital:</span> {country.capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default Country;