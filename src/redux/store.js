import { configureStore } from '@reduxjs/toolkit';
import pollutionReducer from './pollution/pollutionSlice';

const store = configureStore({
  reducer: {
    pollution: pollutionReducer,
  },
});

export default store;
