function ListItems({items}) {
    return (
        <ul style={{display: "flex", gap: "20px", flexWrap: "wrap", listStyle: "none"}}>
            {
                items.map((item) => (
                    <li key={item.id} style={{border: "1px solid black", borderRadius: "10px", padding: "10px", width: "200px", textAlign: "center"}}>
                        <img src={item.img} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </li>
                ))
            }
        </ul>
    );
}

export default ListItems;
