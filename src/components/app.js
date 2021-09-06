import React from 'react';
import beasts from '../api/data.json';
import {Footer} from './footer';
import {Header} from './header';
import {Main} from './main';


export function App() {

  return (
    <>
      <Header/>
      <Main beasts={beasts}/>
      <Footer/>
    </>
  );
}
