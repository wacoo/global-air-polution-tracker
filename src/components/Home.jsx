import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrent } from "../redux/pollution/pollutionSlice";
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    const pollution = useSelector((state) => state.pollution);

    useEffect(() => {
        dispatch(fetchCurrent([51.5085, -0.1257]))
    }, [dispatch]);

    useEffect(() => {
        console.log(pollution);
    }, [pollution]);

    return (
        <div className="container">
            <div className="main-area"></div>
            <div className="sub-area">
                <div className="sub-row"></div>
                <div className="sub-row"></div>
                <div className="sub-row"></div>
            </div>
        </div>
    );
}

export default Home;