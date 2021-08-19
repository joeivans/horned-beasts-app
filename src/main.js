import * as PropTypes from 'prop-types';
import React from 'react';
import Row from 'react-bootstrap/Row';
import {BeastColumn} from './beastColumn';


BeastColumn.propTypes = {index: PropTypes.number};

export function Main(props) {
  'use strict';

  return (
    <main>
      {beastMaker()}
    </main>
  );

  function beastMaker(columns = 3) {
    const result = [];

    const remainder = props.beasts.length % 3;
    console.log(remainder);

    for (let i = 0; i < props.beasts.length - remainder; i += columns) {
      result.push(
        <Row>
          <BeastColumn beast={props.beasts[i]}/>
          <BeastColumn beast={props.beasts[i + 1]}/>s
          <BeastColumn beast={props.beasts[i + 2]}/>s
        </Row>);
    }

    const i = props.beasts.length - remainder;
    result.push(
      <Row>
        <BeastColumn beast={props.beasts[i]}/>
        <BeastColumn beast={props.beasts[i + 1]}/>
      </Row>);

    return result;
  }
}
