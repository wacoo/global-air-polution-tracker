import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/air_pollution';
const appKey = 'appid=bbc73ce21b9761f801b24c8404eb9e0a';

const fetchCountryData = createAsyncThunk('pullution/fetchCurrent', async (country) => {
  const [lat, long] = country.gps;
  const res = await axios.get(`${url}?lat=${lat}&lon=${long}&${appKey}`);

  const pollution = res.data.list[0].components;
  const newCountry = {
    ...country,
    pollution,
  };
  return newCountry;
});

const fetchCityData = createAsyncThunk('poluttion/fetchCityData', async (city) => {
  const [lat, long] = city.gps;

  const res = await axios.get(`${url}?lat=${lat}&lon=${long}&${appKey}`);
  const pollution = res.data.list[0].components;
  const newCity = {
    ...city,
    pollution,
  };
  return newCity;
});

const initialState = {
  isLoading: false,
  countries: [],
  selectedCountry: {},
  tempHolder: [],
  error: undefined,
};

const pollutionSlice = createSlice({
  name: 'pollution',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selectedCountry = action.payload;
    },
    getFiltered: (state, action) => {
      if (state.tempHolder.length === 0) {
        state.tempHolder = state.countries;
      }

      if (action.payload.length === 0) {
        state.countries = state.tempHolder;
      }
      state.countries = state.countries.filter((country) => country.name.startsWith(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountryData.fulfilled, (state, action) => {
        state.countries.push(action.payload);
      })
      .addCase(fetchCountryData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchCityData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.isLoading = false;
        const cityData = action.payload;
        const cityIndex = state.selectedCountry.cities.findIndex(
          (city) => city.name === cityData.name,
        );
        if (cityIndex !== -1) {
          state.selectedCountry.cities[cityIndex] = cityData;
        }
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default pollutionSlice.reducer;
export { fetchCountryData, fetchCityData };
export const {
  setSelected, getFiltered, setFetchType, clearState, setHistoryDateUnix,
} = pollutionSlice.actions;
