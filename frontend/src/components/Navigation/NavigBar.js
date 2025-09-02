import React from "react";
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';

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
        <div className="navBarLink">
          <span className="navBarLink">HomePage</span>
          <span className="navBarLink">Profile</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIcon"></div>
        </div>
      </div>
    </div>
   
  );
}
