function User(props) {
    return (
        <ul>
            <li>Nombre: {props.info.name}</li>
            <li>Age: {props.info.age}</li>
        </ul>
    );
}

export default User;
