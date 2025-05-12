import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.sampleapis.com/rickandmorty/characters')
      .then(res => res.json())
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(err => {
        console.err('Error de carga de API', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container className='mt-4'>
        <h1>Rick & Morty Characters</h1>
        <Row>
          {
            characters.map(char => (
              <Col key={char.id} md={4}>
                <Card className="m-2">
                  <Card.Img src={char.image} />
                  <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                    <Card.Text>
                      <strong>Specie: {char.species || 'N/A'}</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default App
