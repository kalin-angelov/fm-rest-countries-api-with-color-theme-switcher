import styles from "./scss/Search.module.css";

import { useEffect, useState } from "react";


const Search = ({ toggleTheme }) => {
  const [dark, setDark] = useState(null);

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

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.searchBar} style={dark}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for a country..." style={dark}/>
      </div>
      <div className={styles.filterMenu} style={dark}>
        <select name="continents" id="continents" style={dark}>
          <option selected disabled hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
          <option value="Europa">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default Search
