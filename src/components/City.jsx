import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './City.css';
import { fetchCityData } from '../redux/pollution/pollutionSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const City = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCountry = useSelector(
    (state) => state.pollution.selectedCountry
  );

  useEffect(() => {
    selectedCountry.cities.forEach((city) => {
      dispatch(fetchCityData(city));
    });
  }, [dispatch]);

  useEffect(() => {
    // console.log(selectedCountry.cities);
  }, [selectedCountry]);


  const handleBackClick = () => {
    navigate('/');
  }

  return (
    <div className="container">
      <div className="city-main">
        <i class="fa fa-arrow-circle-left" onClick={() => handleBackClick()}/>
        <div>
          <h2>{selectedCountry.name}</h2>
          <img src={selectedCountry.map} alt="" />
        </div>        
      </div>
      <div className="city-sub">
        {selectedCountry.cities.map((city) => {
          const uuid = uuidv4();
          const pollution = city.pollution
            ? city.pollution
            : {
                co: '',
                no: '',
                nh3: '0',
                o3: '',
                pm10: '',
                pm2_5: '',
                so2: '',
              };
          const newCity = {
            ...city,
            pollution,
          };
          const { co, no, nh3, o3, pm10, pm2_5, so2 } = newCity.pollution;
          return (
            <div className="cell-detail" key={uuid}>
              <h2>{city.name}</h2>
              <div className="data">
                <span>{`CO: ${co} NO: ${no}`}</span>
                <br />
                <span>{`NH3: ${nh3} O3: ${o3}`}</span>
                <br />
                <span>{`PM10: ${pm10} PM2_5: ${pm2_5}`}</span>
                <br />
                <span>{`SO2: ${so2}`}</span>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default City;