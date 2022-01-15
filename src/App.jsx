import './App.css';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import React from 'react';
import Home from './Home';
import LabReport1 from './lab-reports/lab-report-1';
class App extends React.Component{

  render(){
    return(
      <div className = 'App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/lab-reports/1" element = {<LabReport1 />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
    }
}

export default App;