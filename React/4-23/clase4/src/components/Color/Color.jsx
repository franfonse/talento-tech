import { useState } from "react";

function Color() {

    const [ highlight, setHighlight ] = useState(false);

    return (
    <div>
      <h2 onMouseOver={() => setHighlight(true)} onMouseOut={() => setHighlight(false)} style={{color: highlight ? "red": "blue", transition: "color 0.3s ease"}}>Talento Tech 2025</h2>
    </div>
    )
}

export default Color;
