import './Home.css';
import { useDispatch } from 'react-redux';
import Country from './Country';
import { getFiltered } from '../redux/pollution/pollutionSlice';

const Home = () => {
  const dispatch = useDispatch();

  const filterCountry = (value) => {
    dispatch(getFiltered(value));
  };

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
};

export default Home;
