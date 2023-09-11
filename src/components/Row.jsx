import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrent } from '../redux/pollution/pollutionSlice';
import globalData from '../data/gps';
import * as IMGS from '../imgs';

const Row = () => {
  const dispatch = useDispatch();
  const pollution = useSelector((state) => state.pollution);

  useEffect(() => {
    globalData.countries.forEach((country) => {
      dispatch(fetchCurrent(country));
    });
  }, [dispatch]);

  useEffect(() => {
    console.log(pollution);
  }, [pollution]);

  const background = {
    background: `linear-gradient(rgba(0, 0, 0,.3), rgba(0, 0, 0,.3)), url(${IMGS.usa})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };

  return pollution.data.map((country) => {
    const { co, no, nh3, o3, pm10, pm2_5, so2 } = country.pollution;
    return (
      <div className="cell" style={background}>
        <img src="" alt="" />
        <h2>{country.name}</h2>
        <div className="pullution">
          {`CO: ${co} NO: ${no}`}
          <br />
          {`NO2: NH3: ${nh3}`}
          <br />
          {`O3: ${o3} PM10: ${pm10}`}
          <br />
          {`PM2_5: ${pm2_5} SO2: ${so2}`}
        </div>
      </div>
    );
  });
};

export default Row;