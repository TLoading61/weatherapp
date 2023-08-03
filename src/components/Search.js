import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const Search = (props) => {
    const [inputValue, setInputValue] = useState("");

    const getSearchValue = (event) => {
        setInputValue(event.target.value);
    }

    const getCity = () => {
        /* Ici, j'utilise le props pour mettre la valeur de l'input
        dans la fonction updateCity. Comme cette fonction a été ajoutée
        dans l'élément parent, il peut la récupérer */
        props.updateCity(inputValue)
    }

    return (
        <div id="search">
            <input onChange={getSearchValue} value={inputValue} type="text" />
            <button onClick={getCity}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
    )
}