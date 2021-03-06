import Col from 'react-bootstrap/Col';
import {HornedBeasts} from './hornedBeasts';


export function BeastColumn(props) {
  'use strict';

  return (
    <Col className="col-sm-4 col-md-4">
      <HornedBeasts description={props.beast.description}
                    title={props.beast.title}
                    horns={props.beast.horns}
                    imageUrl={props.beast.image_url}
                    altText={props.beast.keyword}
                    handleModalClick={props.handleModalClick}/>
    </Col>);
}
