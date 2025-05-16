import { Container } from "react-bootstrap";

function Admin() {
  return (
    <Container className="mt-4">
      <h2>Admin Dashboard</h2>
      <p>Only authorised access for admins.</p>
    </Container>
  );
}

export default Admin;
