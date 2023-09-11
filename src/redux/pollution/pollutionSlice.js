import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/air_pollution';
const appKey = 'appid=bbc73ce21b9761f801b24c8404eb9e0a';

const fetchCurrent = createAsyncThunk('pullution/fetchCurrent', async (country) => {
  const [lat, long] = country.gps;
  const res = await axios.get(`${url}?lat=${lat}&lon=${long}&${appKey}`);

  const pollution = res.data.list[0].components;
  const newCountry = {
    ...country,
    pollution,
  };
  return newCountry;
});
const initialState = {
  isLoading: false,
  data: [],
  error: undefined,
};

const pollutionSlice = createSlice({
  name: 'pollution',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrent.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCurrent.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(fetchCurrent.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default pollutionSlice.reducer;
export { fetchCurrent };
