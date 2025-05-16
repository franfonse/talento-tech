import { Container, ListGroup } from "react-bootstrap";

function Products() {
  return (
    <Container className="mt-4">
      <h2>Products available</h2>
      <ListGroup>
        <ListGroup.Item>Products A</ListGroup.Item>
        <ListGroup.Item>Products B</ListGroup.Item>
        <ListGroup.Item>Products C</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Products;
