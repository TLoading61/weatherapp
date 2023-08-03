import { useEffect, useState } from "react";
import { Prevision } from "./Prevision";

export const Forecast = (props) => {
    const [prev, setPrev] = useState([])

    useEffect(() => {
        setPrev(props.forecast.forecastday)
    }, [props.forecast.forecastday])
    //const prev = [props.forecast.forecastday];
    
    return (
        <div id="previsions">
            {
                prev ? (
                    prev.map((prv, key) => {
                        return (
                            <Prevision key={key} date={prv.date} text={prv.day.condition.text} temp={prv.day.avgtemp_c} />
                        )
                    })
                ) : (
                    <p></p>
                )
            }
        </div>
    )
}