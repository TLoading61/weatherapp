import { WeatherIcon } from "../assets/WeatherIcon"

export const Prevision = (props) => {

    const convertDateFormat = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const formattedDate = convertDateFormat(props.date);

    return (
        <div className="prevision">
            <p className="prevdate">{formattedDate}</p>
            <p><WeatherIcon text={props.text} /></p>
            <p>{props.temp}°C</p>
        </div>
    )
}