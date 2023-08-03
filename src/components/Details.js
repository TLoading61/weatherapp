export const Details = (props) => {
    if(props.humidity && props.uv && props.wind){
        return (
            <div>
                <div className="details">
                    <p>Indice UV</p>
                    <p>{props.uv}</p>
                </div>
                <div className="details">
                    <p>Humidité</p>
                    <p>{props.humidity}%</p>
                </div>
                <div className="details">
                    <p>Vent</p>
                    <p>{props.wind}km/h</p>
                </div>
            </div>
        )
    } else {
        return (
        <div>
            <h2>Entrez une ville dans le formulaire pour afficher ses prévisions météo !</h2>
        </div>
        )
    }
}