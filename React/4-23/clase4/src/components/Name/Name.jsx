

import { useState } from "react";

function Name() {
    
    const [ name, setName ] = useState();

    return (
        <div>
            <h2>Write your name</h2>
            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}/>
            <p>Hola, {name ? name: "Unknown"}</p>
        </div>
    )
}

export default Name;
