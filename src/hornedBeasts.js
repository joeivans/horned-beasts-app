import React from 'react';

export function HornedBeasts(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <img title={props.title} src={props.imageUrl} alt={props.altText}/>
      <p>{props.description}</p>
    </>
  );
}
