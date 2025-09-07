import React from "react";
import "./leftPane.css";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import GroupIcon from "@mui/icons-material/Group";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FlagIcon from "@mui/icons-material/Flag";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BuildIcon from "@mui/icons-material/Build";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function LeftPane() {
  return (
    <div class="leftPaneBox">
      <div class="leftPaneContainer">
        <div class="leftPaneMenu">
          <li class="leftPaneMenuItem">
            <MarkUnreadChatAltIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Messages</span>
          </li>
          <li class="leftPaneMenuItem">
            <GroupIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Groups</span>
          </li>
          <li class="leftPaneMenuItem">
            <RssFeedIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Feed</span>
          </li>
          <li class="leftPaneMenuItem">
            <FlagIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Pages</span>
          </li>
          <li class="leftPaneMenuItem">
            <CalendarMonthIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Events</span>
          </li>
          <li class="leftPaneMenuItem">
            <BuildIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Settings</span>
          </li>
          <li class="leftPaneMenuItem">
            <SportsEsportsIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Games</span>
          </li>
          <li class="leftPaneMenuItem">
            <NewspaperIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">News</span>
          </li>
          <li class="leftPaneMenuItem">
            <WorkOutlineIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Jobs</span>
          </li>
          <li class="leftPaneMenuItem">
            <AddShoppingCartIcon className="leftPaneMenuIcon" />
            <span class="leftPaneMenuText">Market</span>
          </li>
          <hr />
          <div class="pageList">
            <div class="pagesYouLiked">
              <h3>Pages You Liked</h3>
            </div>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
            <li class="pageListItem">
              <img src="/images/img5.jpg" alt="" className="pagePic" />
              <span class="pageName"> Isuru Pradeep</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
