import { useState, useEffect } from 'react';
import { City } from './City';
import { Details } from "./Details";
import { Forecast } from "./Forecast";
import { Search } from "./Search";
import Axios from "axios";

export const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({
        location: {
            name: "Alençon",
            country: "France"
        },
        current: {
            temp_c: "20",
            condition: {
                text: "Ensoleillé"
            }
        }
    });
    const [forecast, setForecast] = useState({});

    const Token = "775e80ca013e4565b1c200831230108";

    const getCityValue = (newCity) => {
        setCity(newCity.replace(' ', '+'));
    }

    /* On utilise le useEffect pour trigger un appel d'API lorsqu'une action est faire sur l'app.
    Pour éviter d'appeller l'API au premier clic aléatoire, on précise dans le tableau du bas la variable city */
    useEffect(() => {
        if (city) {
            setLoading(true);
            Axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${Token}&q=${city}&days=4&lang=fr`)
            .then((response) => {
                console.log(response.data.current)
                setForecast(response.data.forecast)
                setWeather(response.data)
            })
            .catch(function(error) {
                console.log(error.response.data); // this is the part you need that catches 400 request
            })
            .finally(() => {
                setLoading(false);
            })
        }
    }, [city])

    /* Le composant search se voit ajouter une fonction updateCity, qui sera utile pour récupérer 
    la ville issue du formulaire. Le composant enfant devra appeler cette fonction via les props
    et mettre en paramètre la valeur du formulaire ! */
    return (
        <div id="wrapper">
            <div id="left-block" className={weather ? weather.current.condition.text.replace(' ', '_').toLowerCase() : "default"}>
                <City 
                    city={weather.location.name} 
                    country={weather.location.country} 
                    temperature={weather.current.temp_c} 
                    text={weather.current.condition.text} 
                />
            </div>
            <div id="right-block">
                <Details humidity={weather.current.humidity} wind={weather.current.wind_kph} uv={weather.current.uv} />
                <Forecast forecast={forecast} />
                <Search updateCity={getCityValue} />
            </div>
        </div>
    )
}