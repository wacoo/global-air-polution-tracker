import './Home.css';
import Country from './Country';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearState, fetchCountryData, getFiltered, setFetchType, setHistoryDateUnix } from '../redux/pollution/pollutionSlice';
import globalData from '../data/gps';

const Home = () => {
    const pollution = useSelector((state) => state.pollution);
    const dispatch = useDispatch();

    const filterCountry = (value) => {
        dispatch(getFiltered(value));
    }

    return (
        <div className="container">
          <div className="main-area">
            <input type="text" placeholder="Search..." onChange={(e) => filterCountry(e.target.value)} />           
          </div>
          <div className="sub-area">
            <Country />
          </div>
        </div>
      );
}

export default Home;