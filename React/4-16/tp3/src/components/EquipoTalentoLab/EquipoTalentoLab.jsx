import "./EquipoTalentoLab.css"

function EquipoTalentoLab(props) {
    return (
        <div className="team-container">
            {props.team.map((teammate) => (
                <div className="teammate-card">
                    <h2>{teammate.name}</h2>
                    <p>{teammate.role}</p>
                    <img src={teammate.img} alt={teammate.name}/>
                </div>
            ) )}
        </div>
    )
}

export default EquipoTalentoLab;
