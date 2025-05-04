function ListItems(props) {
    return (
        <div>
            <ul>
                {props.items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListItems;