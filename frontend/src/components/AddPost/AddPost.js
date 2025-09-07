import React from "react";
import "./addPost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div class="addPost">
      <div class="addPostContainer">
        <div class="addPostTop">
          <img src="/images/img5.jpg" alt="" class="addPostPic" />
          <input
            placeholder="Whats in your mind..?"
            type="text"
            class="addPostInput"
          />
        </div>
        <hr className="postHr" />
        <div class="addPostBottom">
          <div class="addPostOptions">
            <div class="addPostOption">
              <InsertPhotoIcon htmlColor="orange" className="addPhoto" />
              <span class="addPostOptionText">Add Photo/Video</span>
            </div>
            <div class="addPostOption">
              <AddLocationAltIcon htmlColor="green" className="addPhoto" />
              <span class="addPostOptionText">Add Location</span>
            </div>
            <div class="addPostOption">
              <LocalOfferIcon htmlColor="blue" className="addPhoto" />
              <span class="addPostOptionText">Add Tag</span>
            </div>
            <div class="addPostOption">
              <LiveTvIcon htmlColor="tomato" className="addPhoto" />
              <span class="addPostOptionText">Go Live</span>
            </div>
          </div>
          <button class="PostButton">Post</button>
        </div>
      </div>
    </div>
  );
}
