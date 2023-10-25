import React from 'react'

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Apidata from './Apidata'
import Book from './Book';


function App() {
  
  return (
    <>
     
      
<Routes>
        <Route path='/' element={<Home />} />

        <Route path='/book/:id'  element={<Book />} />
        

      </Routes>
      </>
  );
}

export default App;
