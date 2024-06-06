import styles from "./scss/Home.module.css";

import { useEffect, useState } from "react";

import countriesDb from "../../db/data.json";

import Country from "../Country/Country";
import Search from "../Search/Search";

const Home = ({ toggleTheme }) => {
   const [db, setDb] = useState([]);

    useEffect(() => {
        setDb(countriesDb);
    },[]);


    return (
        <main className={styles.mainContainer} style={toggleTheme ? null : {backgroundColor: "#202d36"}}>
            <Search toggleTheme={toggleTheme}/>
            <div className={styles.countriesContainer}>
                {
                    db.slice(0, 8).map(country => 
                        <Country 
                            key={country.population} 
                            country={country}
                            toggleTheme={toggleTheme}
                        />)
                }
            </div>
        </main>
    );
};

export default Home;
