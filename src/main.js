import * as PropTypes from 'prop-types';
import React from 'react';
import Row from 'react-bootstrap/Row';
import {BeastColumn} from './beastColumn';
import beasts from './data.json';


BeastColumn.propTypes = {index: PropTypes.number};

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export function Main() {
  'use strict';

  return (
    <main>
      {beastMaker()}
    </main>
  );

  /**
   *
   * @param {number} columns
   * @returns {JSX.Element[]}
   */
  function beastMaker(columns = 3) {
    const result = [];

    const remainder = beasts.length % 3;
    console.log(remainder);

    for (let i = 0; i < beasts.length - remainder; i += columns) {
      result.push(
        <Row>
          <BeastColumn index={i}/>
          <BeastColumn index={i + 1}/>
          <BeastColumn index={i + 2}/>
        </Row>);
    }

    const i = beasts.length - remainder;
    result.push(
      <Row>
        <BeastColumn index={i}/>
        <BeastColumn index={i + 1}/>
      </Row>);

    return result;
  }
}
