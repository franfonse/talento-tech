import { useState } from "react";

function ButtonColor(props) {

    const [active, setActive] = useState(false);

    return <button onClick={() => setActive(!active)} style={{
        backgroundColor: active ? 'red': props.color
    }}>{active ? 'Red': props.color}</button>
}

export default ButtonColor;
