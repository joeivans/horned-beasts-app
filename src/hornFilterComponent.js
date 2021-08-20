import {Container, Navbar} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export default function HornFilterComponent() {
  'use strict';

  function handleChange(event) {
    alert(event.target.value);
  }

  return (
    <Container className="w-50 p-4">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Horn Filter</Navbar.Brand>
        </Container>
      </Navbar>
      <Form.Select aria-label="Number of horns"
                   onChange={handleChange}>
        <option value="*">Any</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Container>
  );
}
