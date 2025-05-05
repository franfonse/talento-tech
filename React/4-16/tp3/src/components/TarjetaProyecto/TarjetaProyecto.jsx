import "./TarjetaProyecto.css";

function TarjetaProyecto(props) {

    return (
        <div className="card-project">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button onClick={() => console.log("Exploring: " + props.title)}>{props.buttonText}</button>
        </div>
    )
}

export default TarjetaProyecto;
