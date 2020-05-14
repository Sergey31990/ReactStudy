import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


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
