import './App.css';
import MenuBar from './Menu/MenuBar';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from './Home';
import React from 'react';
import { ClassNames } from '@emotion/react';

class App extends React.Component{

  render(){
    return(
      <div className = 'App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
    }
}

export default App;