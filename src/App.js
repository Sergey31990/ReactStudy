import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import clases from './components/Content/Content.module.css';
import Dialog from './components/Dialog/Dialog';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="MainPage">
        <Header />
        <Nav />
        <div className= {clases.content}>
        <Route path='/content' component={Content}/>
        <Route path='/dialog' component={Dialog}/>
        </div>
      <Footer />
      </div>
      </BrowserRouter>
    
  );
  
}



export default App;
