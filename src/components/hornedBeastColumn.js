import Col from 'react-bootstrap/Col';
import {HornedBeast} from './hornedBeast';


export function HornedBeastColumn(props) {

  return (
    <Col className="col-sm-4 col-md-4">
      <HornedBeast description={props.beast.description}
                   title={props.beast.title}
                   horns={props.beast.horns}
                   imageUrl={props.beast.image_url}
                   altText={props.beast.keyword}
                   handleModalClick={props.handleModalClick}
                   handleFavoriteClick={props.handleFavoriteClick}
                   favoriteCount={props.favoriteCount}
      />
    </Col>);
}
