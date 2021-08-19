import React from 'react';
import Image from 'react-bootstrap/Image';


export class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteCount: 0
    };
  }

  favoriteClickHandler = () =>
    this.setState({
      favoriteCount: this.state.favoriteCount + 1,
    });

  renderFavorite() {
    return this.state.favoriteCount;
  }

  render() {
    'use strict';
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image thumbnail onClick={this.favoriteClickHandler}
               title={this.props.title}
               src={this.props.imageUrl}
               alt={this.props.altText}/>
        <p>{this.props.description}</p>
        <span>&#9829; {this.renderFavorite()}</span>
      </>
    );
  }
}
