import styles from "./scss/Search.module.css";

import { useState } from "react";

const SearchBar = ({ dark, jsonDataBase, setDataBase }) => {
    const [value, setValue] = useState("");

    const onClickEsc = (e) => {
        if (e.keyCode === 27) {
            setValue("");
        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const searchingFor = value.toLocaleUpperCase();
        if (searchingFor !== "") {
          const result = jsonDataBase.filter(country => country.name.toLocaleUpperCase().includes(searchingFor));
          result.length === 0 ? "No matches" : null;
          setDataBase(result);
          setValue("");
        } else {
          setDataBase(jsonDataBase.slice(0,8));
        }
    };

    return (
        <form onSubmit={onSubmit} onKeyDown={onClickEsc}>
            <div className={styles.searchBar} style={dark}>
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                <input 
                    type="text" 
                    placeholder="Search for a country..." 
                    value={value} 
                    onChange={(e) => {setValue(e.target.value)}} 
                    style={dark}
                />
            </div>
        </form>
    );
};

export default SearchBar;
