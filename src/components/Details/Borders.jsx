import styles from "./scss/Details.module.css";

import countriesDb from "../../db/data.json";

import { useNavigate } from "react-router-dom";

const Borders = ({ border, dark }) => {
  const navigate = useNavigate();
  const borderCountry = countriesDb.find(country => country.alpha3Code === border);
  
  const onClick = () =>{
    navigate(`/details/${borderCountry.name}`, {state: {countryInfo: borderCountry}})
  };

  return (
    <button onClick={onClick} className={styles.borderBtn} title={borderCountry.name} style={dark}>{borderCountry.name}</button>
  );
};

export default Borders;
