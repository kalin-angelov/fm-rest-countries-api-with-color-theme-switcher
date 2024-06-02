import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCountriesError, getCountriesStatus, fetchCountries, getCountries } from "../../service/countries/countriesSlice";

import Country from "../Country/Country";

const Home = () => {
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
        content = countries.slice(0,8).map(country => 
            <Country 
                key={country.population} 
                country={country}
            />
        );
    } else if (countriesStatus === "failed") {
        content = <p>{countriesError}</p>
    }

    return (
        <main>
            {content}
        </main>
    );
};

export default Home;
