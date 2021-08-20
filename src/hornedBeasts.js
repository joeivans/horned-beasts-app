import React from 'react';
import {Button, Card} from 'react-bootstrap';


export class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteCount: 0
    };
  }

  handleModalClick = (event) => {
    this.props.handleModalClick(event);
  };

  handleFavoriteClick = () =>
    this.setState({
      favoriteCount: this.state.favoriteCount + 1,
    });

  render() {
    return (
      <Card style={{width: '18rem'}}>
        <Card.Img
          src={this.props.imageUrl}
          title={this.props.title}
          alt={this.props.altText}
          variant="top"
          onClick={this.handleModalClick}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary"
                  onClick={this.handleFavoriteClick}><span>&#9829; Likes: {this.state.favoriteCount}</span></Button>
        </Card.Body>
      </Card>
    );
  }
}
