import Borders from "./Borders";
import styles from "./scss/Details.module.css";

import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const countryInfo = location.state.countryInfo;

  return (
    <div className={styles.detailsContainer}>
      <button onClick={() => navigate("/")}><i className="fa-solid fa-arrow-left"></i>Back</button>

      <div>
        <figure>
          <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
        </figure>
        <h1>{countryInfo.name}</h1>
        <ul>
            <li>Native Name: {countryInfo.nativeName}</li>
            <li>Population: {countryInfo.population}</li>
            <li>Region: {countryInfo.region}</li>
            <li>Sub Region: {countryInfo.subregion}</li>
            <li>Capital: {countryInfo.capital}</li>
        </ul>

        <ul>
            <li>Top Level Domain: {countryInfo.topLevelDomain[0]}</li>
            <li>Currencies: {countryInfo.currencies[0].name}</li>
            <li>Languages: {countryInfo.languages[0].name}</li>
        </ul>

        <h2>Border Countries:</h2>
        {countryInfo.borders ? 
          <div className={styles.borderCountries}>
            {countryInfo.borders.map(border => <Borders key={border} border={border}/>)}
          </div> : null
        }
      </div>
    </div>
  )
}

export default Details;
