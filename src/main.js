import React from 'react';
import {HornedBeasts} from './hornedBeasts';
import './main.css';

export function Main() {
  return (
    <main>
      <HornedBeasts description="A goat" title="Hi" imageUrl="./logo192.png" altText="It says Hi"/>
      <HornedBeasts description="An elk" title="How are you?" imageUrl="./logo192.png" altText="It says How are you?"/>
    </main>
  );
}
