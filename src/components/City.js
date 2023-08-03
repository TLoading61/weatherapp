import { Today } from "../assets/Today";
import { WeatherIcon } from "../assets/WeatherIcon";

export const City = (props) => {  
    return (
        <div id="bg-filter">
          <div id="city-infos">
              <h1>{props.city} ; {props.country}</h1>
              <Today />
            </div>
            <div id="city-temperature">
              <p><WeatherIcon className={"Test"} text={props.text} /></p>
              <p id="temperature">{props.temperature}°C</p>
              <p id="weather">{props.text}</p>
            </div>
        </div>
    )
}