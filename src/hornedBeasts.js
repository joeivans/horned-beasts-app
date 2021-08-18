import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


export class HornedBeasts extends React.Component {
  constructor() {
    super();

    this.state = {
      favoriteCount: 0
    };
  }

  favoriteClickHandler = () =>
    this.setState({
      favoriteCount: ++this.state.favoriteCount,
    });

  renderFavorite() {
    return this.state.favoriteCount;
  }

  render() {
    return (
      <Container>
        <h2>{this.props.title}</h2>
        <Image thumbnail onClick={this.favoriteClickHandler}
               title={this.props.title}
               src={this.props.imageUrl}
               alt={this.props.altText}/>
        <p>{this.props.description}</p>
        <span>&#9829; {this.renderFavorite()}</span>
      </Container>
    );
  }
}
