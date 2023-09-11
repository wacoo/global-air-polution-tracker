import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrent } from "../redux/pollution/pollutionSlice";
import { globalData } from '../data/gps';

const Row = ()=> {
    const dispatch = useDispatch();
    const pollution = useSelector((state) => state.pollution);
    
    // useEffect(() => {
    //     dispatch(fetchCurrent([51.5085, -0.1257]))
    // }, [dispatch]);

    useEffect(() => {
        console.log(pollution.data.list);
    }, [pollution]);

    return (
        Object.entries(globalData).forEach(([key, val]) => {
            val.countries.forEach((country) => { 
                useEffect(() => {
                    dispatch(fetchCurrent(country.gps)); 
                }, [dispatch]);            
            <div className="sub-row">
                <div className="cell">{country.name}</div>
                <div className="cell"></div>
            </div>
            });
        })
    );
}

export default Row;