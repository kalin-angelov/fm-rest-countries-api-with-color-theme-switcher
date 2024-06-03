import styles from "./scss/Home.module.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import countriesDb from "../../db/data.json";
import { getCountriesError, getCountriesStatus, fetchCountries, getCountries } from "../../service/countries/countriesSlice";

import Country from "../Country/Country";
import CountryDb from "../Country/CountryDb";
import Search from "../Search/Search";

const Home = ({ toggleTheme }) => {
    const dispatch = useDispatch();

    const countries = useSelector(getCountries);
    const countriesStatus = useSelector(getCountriesStatus);
    const countriesError = useSelector(getCountriesError);

    useEffect(() => {
        if (countriesStatus === "idle") {
            dispatch(fetchCountries());
        };
    },[countriesStatus, dispatch]);

    let content;
    if (countriesStatus === "loading") {
        content = <p>Loading...</p>
    } else if (countriesStatus === "succeeded") {
        if (countries === "Failed to fetch") {
            content = countriesDb.slice(0, 8).map(country => 
                <CountryDb 
                    key={country.population} 
                    country={country}
                    toggleTheme={toggleTheme}
                />
            );
        } else {
            content = countries.slice(0, 8).map(country => 
                <Country 
                    key={country.population} 
                    country={country}
                    toggleTheme={toggleTheme}
                />
            );
        }
    } else if (countriesStatus === "failed") {
        content = <p>{countriesError}</p>
    }

    return (
        <main className={styles.mainContainer} style={toggleTheme ? null : {backgroundColor: "#202d36"}}>
            <Search toggleTheme={toggleTheme}/>
            <div className={styles.countriesContainer}>
                {content}
            </div>
        </main>
    );
};

export default Home;
