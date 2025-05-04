import Button from "../Button/Button";
import "./Card.css";

function Card(props) {
    return (
        <div class="card">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <Button text={props.buttonText} color={props.buttonColor}/>
        </div>
    );
}

export default Card;
