import styles from "./scss/Search.module.css";

import { useEffect, useState, useContext } from "react";

import { Context } from "../../context/Context";

import jsonDataBase from "../../db/data.json";

const Search = ({ toggleTheme }) => {
  const { setDataBase } = useContext(Context);
  const [dark, setDark] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [value, setValue] = useState("");
  const [region, setRegion] = useState("Filter by Region")

  useEffect(() => {
    if (toggleTheme === false) {
      setDark({background: "#2b3743", color: "white"})
    } else {
      setDark(null);
    };

  },[toggleTheme]);

  const onSubmit = (e) => {
    e.preventDefault()
  };

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleFiltering = (e) => {
    const continent = String(e.target.textContent);
    const filter = jsonDataBase.filter(country => country.region === continent);
    setRegion(continent)
    setDataBase(filter);
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={styles.searchingInstruments}>
      <form onSubmit={onSubmit}>
        <div className={styles.searchBar} style={dark}>
          <span><i className="fa-solid fa-magnifying-glass"></i></span>
          <input type="text" placeholder="Search for a country..." style={dark}/>
        </div>
      </form>

      <div className={styles.filterMenu} style={dark}>

      <div className={styles.dropDownBtn} onClick={handleDropDown} style={dark}>
        <span>{region} </span>  
        <span><i className="fa-solid fa-caret-down"></i></span>
      </div>

      <div className={!showDropDown ? styles.dropDownMenu : styles.dropDownMenuOpen } style={dark}>
        <div className={styles.item} onClick={(e) => handleFiltering(e)}>Africa</div>
        <div className={styles.item} onClick={(e) => handleFiltering(e)}>America</div>
        <div className={styles.item} onClick={(e) => handleFiltering(e)}>Asia</div>
        <div className={styles.item} onClick={(e) => handleFiltering(e)}>Europe</div>
        <div className={styles.item} onClick={(e) => handleFiltering(e)}>Oceania</div>
      </div>

      </div>
  </div>
  );
};

export default Search
