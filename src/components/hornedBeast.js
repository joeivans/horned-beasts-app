import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {BiLike} from 'react-icons/bi';


export function HornedBeast(props) {

  function handleModalClick(event) {
    props.handleModalClick(
      event.target.title,
      event.target.src);
  }

  function handleFavoriteClick() {
    props.handleFavoriteClick();
  }

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img
        src={props.imageUrl}
        title={props.title}
        alt={props.altText}
        variant="top"
        onClick={handleModalClick}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>This beast has {props.horns} horns</Card.Text>
        <Button variant="primary"
                onClick={handleFavoriteClick}><span><BiLike/> Likes: {props.favoriteCount}</span></Button>
      </Card.Body>
    </Card>
  );
}
