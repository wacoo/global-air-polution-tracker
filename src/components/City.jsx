import { useSelector } from 'react-redux';
import './City.css';
import { v4 as uuidv4 } from 'uuid';

const City = () => {
  const selectedCountry = useSelector(
    (state) => state.pollution.selectedCountry,
  );

  const uuid = uuidv4();
  const { capital } = selectedCountry;
  const {
    co, no, nh3, o3, pm10, pm2_5: pm2, so2,
  } = capital.pollution;

  return (
    <div className="container">
      <div className="city-main">
        <a href="/">
          <i className="fa fa-arrow-circle-left" />
        </a>
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <img src={selectedCountry.flags.png} alt="" />
        </div>
      </div>
      <div className="city-sub">
        <div className="cell-detail" key={uuid}>
          <h2>{capital.name}</h2>
          <div className="data">
            <span>{`CO: ${co} NO: ${no}`}</span>
            <br />
            <span>{`NH3: ${nh3} O3: ${o3}`}</span>
            <br />
            <span>{`PM10: ${pm10} PM2_5: ${pm2}`}</span>
            <br />
            <span>{`SO2: ${so2}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
