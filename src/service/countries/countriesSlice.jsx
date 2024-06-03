import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://restcountries.com/v3.1";

const initialState = {
    countries: [],
    status: "idle",
    error: null
};

export const fetchCountries = createAsyncThunk("countries/fetchCountries", async () => {
    try{
        const response = await fetch(URL + "/all");
        const result = await response.json();
        return result;
    }catch(error){
        return error.message
    }
})

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const getCountries = (state) => state.countries.countries;
export const getCountriesStatus = (state) => state.countries.status;
export const getCountriesError = (state) => state.countries.error;

export default countriesSlice.reducer;

