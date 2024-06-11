import styles from "./scss/Search.module.css";

import { useContext } from "react";

import { Context } from "../../context/Context";

import SearchBar from "./SearchBar";
import FilterMenu from "./FilterMenu";

import jsonDataBase from "../../db/data.json";

const Search = () => {
  const { setDataBase, dark } = useContext(Context);

  return (
    <div className={styles.searchingInstruments}>

      <SearchBar dark={dark} jsonDataBase={jsonDataBase} setDataBase={setDataBase}/>

      <FilterMenu dark={dark} jsonDataBase={jsonDataBase} setDataBase={setDataBase}/>
      
  </div>
  );
};

export default Search
