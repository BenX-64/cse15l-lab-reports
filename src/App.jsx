import './App.css';
import MenuBar from './MenuBar'
import React from 'react'

class App extends React.Component{

  render(){
    return(
      <div className = "App">
        <MenuBar />
        <p>
          I have no life
        </p>
      </div>
    );
    }
}

export default App;