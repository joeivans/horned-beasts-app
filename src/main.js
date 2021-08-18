import React from 'react';
import beasts from './data.json';
import {HornedBeasts} from './hornedBeasts';
import './main.css';


export function Main() {
  'use strict';

  return (
    <main>
      {beastMaker()}
    </main>
  );

  function beastMaker() {
    const result = [];

    beasts.forEach(beast => {
      result.push(
        <HornedBeasts description={beast.description}
                      title={beast.title}
                      imageUrl={beast.image_url}
                      altText={beast.keyword}/>);
    });

    return result;
  }
}
