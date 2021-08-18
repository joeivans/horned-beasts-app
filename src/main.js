import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import beasts from './data.json';
import {HornedBeasts} from './hornedBeasts';


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
    /*
    const result = [];

    for (let i = 0; i < beasts.length; i += columns) {
      let row = document.createElement('Row');
      for (let j = 0; j < columns; j++) {
        try {
          row.appendChild(<HornedBeasts description={beasts[i + j].description}
                                        title={beasts[i + j].title}
                                        imageUrl={beasts[i + j].image_url}
                                        altText={beasts[i + j].keyword}/>);
        } catch (e) {
          console.log(e);
        }
      }
      result.push(row);
    }
    return result;
     */

    // I'd like to know how to do this more programmatically
    // like the above attempt, with a Row reference,
    // appending children to it before pushing to the array

    const result = [];

    const remainder = beasts.length % 3;
    console.log(remainder);

    for (let i = 0; i < beasts.length - remainder; i += columns) {
      result.push(
        <Row>
          <Col>
            <HornedBeasts description={beasts[i + 0].description}
                          title={beasts[i + 0].title}
                          imageUrl={beasts[i + 0].image_url}
                          altText={beasts[i + 0].keyword}/>
          </Col>
          <Col>
            <HornedBeasts description={beasts[i + 1].description}
                          title={beasts[i + 1].title}
                          imageUrl={beasts[i + 1].image_url}
                          altText={beasts[i + 1].keyword}/>
          </Col>
          <Col>
            <HornedBeasts description={beasts[i + 2].description}
                          title={beasts[i + 2].title}
                          imageUrl={beasts[i + 2].image_url}
                          altText={beasts[i + 2].keyword}/>
          </Col>
        </Row>);
    }

    // I know there's 2 left but I don't know (yet) how to
    // make a row and append children to it cleanly
    // while respecting the remainder
    const i = beasts.length - 2;
    result.push(
      <Row>
        <Col>
          <HornedBeasts description={beasts[i + 0].description}
                        title={beasts[i + 0].title}
                        imageUrl={beasts[i + 0].image_url}
                        altText={beasts[i + 0].keyword}/>
        </Col>
        <Col>
          <HornedBeasts description={beasts[i + 1].description}
                        title={beasts[i + 1].title}
                        imageUrl={beasts[i + 1].image_url}
                        altText={beasts[i + 1].keyword}/>
        </Col>
      </Row>);

    return result;
  }
}
