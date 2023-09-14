import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryData, setSelected } from '../redux/pollution/pollutionSlice';
import globalData from '../data/gps';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Country = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pollution = useSelector((state) => state.pollution);

  useEffect(() => {
    if (pollution.countries.length === 0) {
      globalData.countries.forEach((country) => {
        dispatch(fetchCountryData(country));
      });
    }
  }, [dispatch, pollution.countries.length]);

  useEffect(() => {
    console.log('POL:', pollution);
  }, [pollution]);

  const bgImage = (img) => {
    const im =  {
        backgroundImage: `url(${img})`,    
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      };
      return im;
  }

  const handleClick = (country) => {
    // console.log(pollution);
    dispatch(setSelected(country));
    navigate('/cities');
  }

  return pollution.countries.map((country) => {
    const uuid = uuidv4();
    const { co, no, no2, nh3, o3, pm10, pm2_5, so2 } = country.pollution;
    return (
      <div className="cell" style={bgImage(country.map)}  onClick={() => handleClick(country)} key={uuid}>
        <div className="inside-icon-wrapper">
          <i class="fa fa-arrow-circle-right"></i>
        </div>
        <div className="">
          <h2>{country.name}</h2>
          <div className="pullution">
            {`CO: ${co} NO: ${no}`}
            <br />
            {`NO2: ${no2} NH3: ${nh3}`}
            <br />
            {`O3: ${o3} PM10: ${pm10}`}
            <br />
            {`PM2_5: ${pm2_5} SO2: ${so2}`}
          </div>
        </div>        
      </div>
    );
  });
};

export default Country;