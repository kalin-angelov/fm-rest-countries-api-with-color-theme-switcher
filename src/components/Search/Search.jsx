import styles from "./scss/Search.module.css";

import { useEffect, useState, useContext } from "react";

import { Context } from "../../context/Context";

import SearchBar from "./SearchBar";
import FilterMenu from "./FilterMenu";

import jsonDataBase from "../../db/data.json";

const Search = ({ toggleTheme }) => {
  const { setDataBase } = useContext(Context);
  const [dark, setDark] = useState(null);
  
  useEffect(() => {
    if (toggleTheme === false) {
      setDark({background: "#2b3743", color: "white"})
    } else {
      setDark(null);
    };

  },[toggleTheme]);

  return (
    <div className={styles.searchingInstruments}>

      <SearchBar dark={dark} jsonDataBase={jsonDataBase} setDataBase={setDataBase}/>

      <FilterMenu dark={dark} jsonDataBase={jsonDataBase} setDataBase={setDataBase}/>
      
  </div>
  );
};

export default Search
