import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';


const App = () => {
  
  return (
    
      <div className="MainPage">
      <Header />
      <Nav />
      <Content />
      <Footer />
      </div>
    
  );
  
}



export default App;
