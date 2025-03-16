import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";
import { useState } from "react";

export default function SearchBox({ updateinfo, setError, error }) {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "891c7b0d6039e98973eee0ee92a19119";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error("City not found");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempmin: jsonResponse.main.temp_min,
                tempmax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            console.error("Error fetching weather:", err);
            return null; // Return null if an error occurs
        }
    };

    let handle = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        let newinfo = await getWeatherInfo();

        if (newinfo) {
            updateinfo(newinfo);
            setError(false); // No error if valid data is received
        } else {
            setError(true); // Show error message if city is invalid
        }
        setCity(""); // Clear input field after submission
    };

    return (
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handle} />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                
            </form>
        </div>
    );
}
