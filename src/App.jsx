import './App.css';
import Header from './components/header';
import React, { useState } from 'react';
import Contents from './components/contents';
import Book from './components/book';
import Data from './components/data';
import About from './components/about';
import Footer from './components/footer';

function App() {

  const btn = {
    borderRadius : '50px' ,
    backgroundColor : "#165DF5",
    color : "white" ,
    border: "0.5px solid #165DF5"
  }
  

  const span = {
    color : "#165DF5"
  }
  
  return (
    <>

    <Header btn = {btn}  span = {span} /> 
    <Contents btn = {btn} />    
    <Book span = {span} />
    <Data/>
    <About/>
    <Footer/>

    </>
    );
}

export default App;
