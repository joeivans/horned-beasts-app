import React from 'react';
import Col from 'react-bootstrap/Col';
import {HornedBeasts} from './hornedBeasts';


export function BeastColumn(props) {
  'use strict';

  return (
    <Col className="col-sm-4 col-md-4">
      <HornedBeasts description={props.beast.description}
                    title={props.beast.title}
                    imageUrl={props.beast.image_url}
                    altText={props.beast.keyword}
                    handleModalClick={props.handleModalClick}/>
    </Col>);
}
