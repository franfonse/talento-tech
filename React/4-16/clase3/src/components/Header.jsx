import { Navbar } from "react-bootstrap";

function Header({user, type}) {
    <Navbar bg="dark" className="px-3">
        <Navbar.Brand>Project Talento 2025</Navbar.Brand>
        <Navbar.Text className="text-white">{type}-{user}</Navbar.Text>
    </Navbar>
}

export default Header;
