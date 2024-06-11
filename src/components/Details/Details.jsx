import Borders from "./Borders";
import styles from "./scss/Details.module.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../../context/Context";

const Details = () => {
  const { dark, toggleTheme } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const countryInfo = location.state.countryInfo;

  return (
    <div className={styles.detailsContainer} style={toggleTheme ? null : {backgroundColor: "#202d36", color: "white"}}>
      
      <button className={styles.backBtn} onClick={() => navigate("/")} style={dark}><i className="fa-solid fa-arrow-left"></i>Back</button>
      
      <article className={styles.countryDetails}>
        <figure>
          <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
        </figure>
        <h1>{countryInfo.name}</h1>
        <ul>
          <li><span>Native Name:</span> {countryInfo.nativeName}</li>
          <li><span>Population:</span> {countryInfo.population}</li>
          <li><span>Region:</span> {countryInfo.region}</li>
          <li><span>Sub Region:</span> {countryInfo.subregion}</li>
          <li><span>Capital:</span> {countryInfo.capital}</li>
        </ul>

        <ul>
          <li><span>Top Level Domain:</span> {countryInfo.topLevelDomain[0]}</li>
          <li><span>Currencies:</span> {countryInfo.currencies[0].name}</li>
          <li><span>Languages:</span> {countryInfo.languages[0].name}</li>
        </ul>

        
        {countryInfo.borders ? 
          <section className={styles.borderCountries}>
            <h2>Border Countries:</h2>
            {countryInfo.borders.map(border => <Borders key={border} border={border} dark={dark}/>)}
          </section> : null
        }
      </article>
    </div>
  )
}

export default Details;
