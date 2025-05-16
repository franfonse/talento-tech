import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <h1>Welcome!</h1>
      <p>This is a route-protected page.</p>
    </Container>
  );
}

export default Home;
