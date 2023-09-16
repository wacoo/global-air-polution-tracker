import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/air_pollution';
const appKey = 'appid=bbc73ce21b9761f801b24c8404eb9e0a';

const urlCountry = 'https://restcountries.com/v3.1/all';

const fetchCountries = createAsyncThunk('pollution/countries', async () => {
  try {
    const response = await axios.get(urlCountry);
    const countries = response.data;
    const filteredCountries = countries.filter((_, index) => (index + 1) % 10 === 0);

    const countDataPromise = filteredCountries.map(async (country) => {
      const { capitalInfo } = country;
      const { capital } = country;
      const [lat, lon] = capitalInfo.latlng;

      const capitalPollutionRes = await axios.get(`${url}?lat=${lat}&lon=${lon}&${appKey}`);
      const capitalPollution = capitalPollutionRes.data.list[0].components;

      const pollutionRes = await axios.get(`${url}?lat=${lat}&lon=${lon}&${appKey}`);
      const pollution = pollutionRes.data.list[0].components;

      const updatedCountry = {
        ...country,
        capital: {
          name: capital[0],
          ...capitalInfo,
          pollution: capitalPollution,
        },
        pollution,
      };

      return updatedCountry;
    });

    const countryData = await Promise.all(countDataPromise);
    return countryData;
  } catch (error) {
    return error.message;
  }
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
      state.countries = state.countries.filter((country) => (
        country.name.common.startsWith(action.payload)));
    },
  },
  extraReducers: (builder) => {
    builder
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
      })
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default pollutionSlice.reducer;
export { fetchCityData, fetchCountries };
export const {
  setSelected, getFiltered, setFetchType, clearState, setHistoryDateUnix,
} = pollutionSlice.actions;
