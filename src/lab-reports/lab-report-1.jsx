import MenuBar from '../Menu/MenuBar'
import React from 'react'
import './labreport.css'

import vscode from '../assets/lab-report-1/vscode.png'
import login from '../assets/lab-report-1/login.png'
import newterminal from '../assets/lab-report-1/newterminal.png'
import oneclick from '../assets/lab-report-1/oneclick.png'
import powershell from '../assets/lab-report-1/powershell.png'
import remote from '../assets/lab-report-1/remote.png'
import scp from '../assets/lab-report-1/scp.png'
import sshconfig from '../assets/lab-report-1/sshconfig.png'
import sshkey from '../assets/lab-report-1/sshkey.png'
import sshtargets from '../assets/lab-report-1/sshtargets.png'
import terminalsc from '../assets/lab-report-1/terminalsc.png'

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
          <h3>
            <a href = "https://benx-64.github.io/cse15l-lab-reports/lab-report-1-week-2.html" target = "_blank" style = {{color:"white"}}>Markdown Version</a>
          </h3>
          <ol className = "labText">
            <li>
              This step is optional but recommended. First, install <a href = "https://code.visualstudio.com/" target = "_blank">Visual Studio Code</a> onto your computer. Even if you don’t end up using it much, it’s still a good code editor.
              <img src = {vscode} alt = "vscode" />
              After installation, install the extension <a href = "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh" target = "_blank">Remote-SSH</a> as it can make the process of SSH'ing into ieng6 servers much faster in step 6. 
            </li>
            <br/>
            <li>
              After setting up Visual Studio Code, it's time to set up everything that's needed to connect to the ieng6 servers. First, set up your course-specific account and note your username ex. `cs15lwi22zz` or `ee15wi22zz` <a href = "(https://sdacs.ucsd.edu/~icc/index.php" target = "_blank">here.</a> 
            <br/>
              Reset the course account's password if it asks you to do so. 
            <br/>If you're a Windows user, install <a href = "(https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse" target = "_blank">OpenSSH</a>. Next, in Visual Studio Code, open a terminal using via the top menu bar. <img src = {newterminal} alt = "newterminal"/> (Or any built-in terminals for your operating system)
              Then, in your terminal, type <br/>`ssh [username]@ieng6.ucsd.edu` ex. `ssh cs15lwi22zz@ieng6lucsd.edu`. After that, type in your password which either already exists or just set up earlier in this step. Note that these passwords and accounts are separate from your Active Directory credentials. 
            <img src = {login} alt = "login"/>
            </li>
            <li>
              After logging in, try running some commands in the SSH terminal. 
              `ls`- Lists files in current directory. 
              `vim` - Opens a painful text editor. (Closed it for the screenshot)
              <img src = {terminalsc} alt = "terminalsc" />
            </li>
            <li>
            To copy files from your local machine to the server, type `scp [filepath] [username]@ieng6.ucsd.edu:~/[path]`
            <img src = {scp} alt = "scp" style = {{width: "100%"}}/>
            </li>
            <li>
              To speed up the process of SSH'ing and using scp without typing in a password every time, you can set up an ssh key. In your local terminal (NOT IN SSH), type: `ssh-keygen` and just spam enter, but keep note of where the id_rsa files are saved on your computer. 
              Windows users must also turn on ssh-agent and follow the ssh-add instructions <a href = "https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement#user-key-generation" target = "_blank">here</a>, make sure to use PowerShell with administrator privileges by right clicking the Windows icon on your task bar like it's an NFT. 
              <img src = {powershell} alt = "powershell" style = {{width:"30%"}}/> After generating an ssh key, ssh back onto the ieng6 servers and type `mkdir .ssh` in the home directory. Then, logout of ssh and scp id_rsa.pub to the new .ssh folder as authorized_keys. Remember path of id_rsa/id_rsa.pub from ssh-keygen.
              <br/>ex. `scp C:\Users\Name\.ssh\id_rsa.pub cs15lwi22zz@ieng6.ucsd.edu:~/.ssh/authorized_keys`
              Now you should be able to login and scp without a password.
              <img src = {sshkey} alt = "sshkey" />
            </li>
            <li>
              Another way to optimize remote running even more is by configuring Visual Studio Code to allow for one-click SSH'ing and directly editing files on ieng6 through Visual Studio Code. To do this, open the remote explorer tab in Visual Studio Code, which we installed in part 1. <br/>
              <img src = {remote} alt = "remote" style = {{width: "30%"}}/><br/>
              Next, click on the gear icon next to SSH targets and select `.\ssh\config`
              <img src = {sshtargets} alt = "sshtargets"/>
              Open the file and configure it such that it looks like this. <img src = {sshconfig} alt = "sshconfig" style = {{width:"50%"}}/> <br/>
              The Host and HostName should be your course username + ieng6.ucsd.edu. The IdentityFile should be `~/.ssh/id_rsa` (I have it named to my courses so it's easier to keep track of). Now you can be even lazier than people using SSH keys by clicking on window icon to instantly SSH onto ieng6 at the click of a button.<br/>
              <img src = {oneclick} alt = "oneclick" />
            </li>
          </ol>
        </div>
      </div>
    );
    }
}

export default LabReport1;