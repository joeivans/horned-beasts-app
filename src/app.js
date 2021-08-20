import React from 'react';
import beasts from './data.json';
import {Footer} from './footer';
import {Header} from './header';
import {Main} from './main';


export function App() {
  'use strict';

  return (
    <>
      <Header/>
      <Main beasts={beasts}/>
      <Footer/>
    </>
  );
}
