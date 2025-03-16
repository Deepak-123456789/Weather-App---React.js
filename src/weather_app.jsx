import SearchBox from "./searchbox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react";
export default function weather()
{
    const [weatherInfo, setweatherinfo] = useState({
        city:"Delhi",
        feelsLike:21.77,
        humidity: 56,
        temp: 22.05,
        tempmax: 22.05,
        tempmin: 22.05,
        weather: "haze", 
    });
    const [error, setError] = useState(false);
    let updateinfo = (result) => {
        setweatherinfo(result);
        setError(false);
    };
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App </h1>
            <SearchBox updateinfo={updateinfo} setError={setError} />
            {!error && <InfoBox info={weatherInfo} />}
            {error && <p style={{ color: "red", marginTop: "10px" }}>❌ No such place exists!</p>}
        </div>
    );
    
}