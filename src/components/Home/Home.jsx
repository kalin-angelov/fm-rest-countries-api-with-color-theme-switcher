import styles from "./scss/Home.module.css";

import { useEffect, useContext } from "react";

import jsonDataBase from "../../db/data.json";

import Country from "../Country/Country";
import Search from "../Search/Search";
import GoUpButton from "../GoUpButton/GoUpButton";

import { Context } from "../../context/Context";


const Home = ({ toggleTheme }) => {
   const { dataBase, setDataBase, filterRegion } = useContext(Context);

   useEffect(() => {
    if (filterRegion.length !== 0) {
        setDataBase(filterRegion);
    } else {
        setDataBase(jsonDataBase.slice(0,8));
    }
   },[]);

    return (
        <main className={styles.mainContainer} style={toggleTheme ? null : {backgroundColor: "#202d36"}}>
            <Search toggleTheme={toggleTheme}/>
            <div className={styles.countriesContainer}>
                {
                    dataBase.map(country => 
                        <Country 
                            key={country.population} 
                            country={country}
                            toggleTheme={toggleTheme}
                        />)
                }
            </div>
            <GoUpButton />
        </main>
    );
};

export default Home;
