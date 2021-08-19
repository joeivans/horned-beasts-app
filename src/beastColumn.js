import React from 'react';
import Col from 'react-bootstrap/Col';
import {HornedBeasts} from './hornedBeasts';


export function BeastColumn(props) {
  return <Col>
    <HornedBeasts description={props.beast.description}
                  title={props.beast.title}
                  imageUrl={props.beast.image_url}
                  altText={props.beast.keyword}/>
  </Col>;
}
