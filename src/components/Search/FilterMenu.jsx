import styles from "./scss/Search.module.css";

import { useEffect, useState, useRef } from "react";

const FilterMenu = ({ dark, jsonDataBase, setDataBase }) => {
    const ref = useRef();
    const [showDropDown, setShowDropDown] = useState(false);
    const [region, setRegion] = useState("Filter by Region")

    useEffect(() => {
        const closeDropDowMenu = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowDropDown(false);
            }
        };

        window.addEventListener("mousedown", closeDropDowMenu);

        return () => window.removeEventListener("mousedown", closeDropDowMenu);
    },[]);

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
        <div className={styles.filterMenu} ref={ref} style={dark}>

            <div className={styles.dropDownBtn} onClick={handleDropDown} style={dark}>
                <span>{region} </span>  
                <span><i className="fa-solid fa-caret-down"></i></span>
            </div>

            <div className={!showDropDown ? styles.dropDownMenu : styles.dropDownMenuOpen }  style={dark}>
                <div className={styles.item} onClick={(e) => handleFiltering(e)}>Africa</div>
                <div className={styles.item} onClick={(e) => handleFiltering(e)}>America</div>
                <div className={styles.item} onClick={(e) => handleFiltering(e)}>Asia</div>
                <div className={styles.item} onClick={(e) => handleFiltering(e)}>Europe</div>
                <div className={styles.item} onClick={(e) => handleFiltering(e)}>Oceania</div>
            </div>

        </div>
    );
};

export default FilterMenu;
