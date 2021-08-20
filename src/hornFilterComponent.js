import {Container, Navbar} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


// REVIEW make sure props is declared as an argument
export default function HornFilterComponent(props) {
  'use strict';

  // REVIEW Could this move to main?
  // - Filter component's selection handling is an implementation detail
  function handleChange(event) {
    props.onChange(event.target.value);

    /* REVIEW Can't return value because no consumer
       if (event.target.value === '1'){return 1;}
       else (event.target.value === '*'){}
    */
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
        <option value="4+">4+</option>
      </Form.Select>
    </Container>
  );
}
