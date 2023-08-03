import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";  
import { faCloud, faBolt, faWind, faSnowflake, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudBolt, faPooStorm, faSmog } from "@fortawesome/free-solid-svg-icons";  
import { useEffect, useState } from "react";

export const WeatherIcon = ({ text }) => {
    const [iconWeather, setIconWeather] = useState(faSun);

    useEffect(() => {
        switch(text){
          case "Pluie légère":
            setIconWeather(faCloudRain);
            break;
          case "Pluie modérée":
            setIconWeather(faCloudRain);
            break;
          case "Pluie éparse à proximité":
            setIconWeather(faCloudRain);
            break;
          case "Ensoleillé":
            setIconWeather(faSun);
            break;
          case "Clair":
            setIconWeather(faSun);
            break;
          case "Partiellement nuageux":
            setIconWeather(faCloudSun);
            break;
          case "Pluie forte à modérée avec tonerre par endroit":
            setIconWeather(faPooStorm);
            break;
          case "Nuageux":
            setIconWeather(faCloud);
            break;
          case "Averse de pluie modérée":
            setIconWeather(faCloudRain);
            break;
          case "Léger grésil":
            setIconWeather(faCloudRain);
            break;
          case "Brume":
            setIconWeather(faSmog);
            break;
          case "Pluie forte":
            setIconWeather(faCloudShowersHeavy);
            break;
          default:
            setIconWeather(faSun);
        }
      }, [text])
  
    return <FontAwesomeIcon icon={iconWeather} />;
};