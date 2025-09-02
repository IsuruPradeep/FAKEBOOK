import React from "react";
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';


export default function NavigBar() {
  return (
    <div class="navBarBox">
      <div class="navBarLeft">
        <span className="logo">fakebook</span>
      </div>
      <div class="navBarCenter">
        <div class="serchBarBox">
          <SearchIcon className="searchIcon"/>
          <input  placeholder="Search for your friend"className="searchInput"/>
        </div>
      </div>
      <div class="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">HomePage</span>
          <span className="navBarLink">Profile</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIcon">
            <PersonIcon/>
            <span class="iconTag">3</span>
          </div>
          <div className="navBarIcon">
            <ChatIcon/>
            <span class="iconTag">5</span>
          </div>
          <div className="navBarIcon">
            <SettingsIcon/>
            <span class="iconTag">2</span>
          </div>
        </div>
        <div class="pic">
          <img src="/images/img5.jpg" alt="" class="profilePicImg"/>
        </div>
      </div>
    </div>
   
  );
}
