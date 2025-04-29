function ListUsers() {
    const users = ['Ana', 'Nico', 'Miguel', 'Fran'];

    return (
        <ul>
            {
                users.map(user => (
                    <li key={user}>{user}</li>
                ))
            }
        </ul>
    );
}

export default ListUsers;
