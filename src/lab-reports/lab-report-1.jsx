import MenuBar from '../Menu/MenuBar'
import React from 'react'
import './labreport.css'

class LabReport1 extends React.Component{

  render(){
    return(
      // eslint-disable-next-line react/style-prop-object
      <div>
        <MenuBar />
        <div className = "labreport">
          <h1>
            Lab Report 1
          </h1>
          <h2>
            Topic: SSH and Remote Access on UCSD ieng6 Servers. 
          </h2>
          <ol className = "labText">
            <li>
            This step is optional but recommended. First, install <a href = "https://code.visualstudio.com/" target = "_blank">Visual Studio Code</a> onto your computer. Even if you don’t end up using it much, it’s still a good code editor.

            </li>
          </ol>
        </div>
      </div>
    );
    }
}

export default LabReport1;