import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header';
import {Main} from './main';
import {Footer} from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function Index() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );

}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
