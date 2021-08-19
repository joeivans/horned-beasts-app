import React from 'react';
import Col from 'react-bootstrap/Col';
import beasts from './data.json';
import {HornedBeasts} from './hornedBeasts';


export function BeastColumn(props) {
  return <Col>
    <HornedBeasts description={beasts[props.index].description}
                  title={beasts[props.index].title}
                  imageUrl={beasts[props.index].image_url}
                  altText={beasts[props.index].keyword}/>
  </Col>;
}
