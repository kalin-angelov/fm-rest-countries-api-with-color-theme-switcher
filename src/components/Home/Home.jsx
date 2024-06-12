import styles from "./scss/Home.module.css";

import { useEffect, useContext } from "react";

import jsonDataBase from "../../db/data.json";

import Country from "../Country/Country";
import Search from "../Search/Search";
import GoUpButton from "../GoUpButton/GoUpButton";

import { Context } from "../../context/Context";

const Home = () => {
   const { dataBase, setDataBase, dark } = useContext(Context);

    useEffect(() => {
        setDataBase(jsonDataBase.slice(0,8));
    },[]);

    return (
        <main className={styles.mainContainer} style={dark ? {backgroundColor: "#202d36"} : null}>
            <Search />
            <div className={styles.countriesContainer}>
                {
                    dataBase.map(country => 
                        <Country 
                            key={country.population} 
                            country={country}
                            dark={dark}
                        />)
                }
            </div>
            <GoUpButton />
        </main>
    );
};

export default Home;
