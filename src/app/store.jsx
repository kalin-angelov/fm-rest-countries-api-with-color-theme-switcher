import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "../service/countries/countriesSlice";

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
    }
});