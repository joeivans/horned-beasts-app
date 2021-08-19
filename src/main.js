import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {BeastColumn} from './beastColumn';


export function Main(props) {
  'use strict';

  return (
    <main>
      <Container>
        <Row>
          {props.beasts.map(beast => <BeastColumn beast={beast}/>)}
        </Row>
      </Container>
    </main>
  );
}
