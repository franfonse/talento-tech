import "./GaleriaIntereses.css";
import { useState } from "react";

function GaleriaIntereses(props) {

    let [ active, setActive ] = useState(false);

    return (
        props.interests.map((item, index) => (
            <button key={index} onClick={() => {
                setActive(!active);
            }} style={{
                backgroundColor: active ? "tomato": "lightblue"
            }} className="interestButton">{item}</button>
        ))
    )
}

export default GaleriaIntereses;
