import React from 'react'
import "./post.css"
export default function Post() {
  return (
    <div class="post">
        <div class="postContainer">
            <div class="postTop">
                <img src="/images/img5.jpg" alt="" class="postImage"/>
                <span class="postUserName">Isuru Pradeep</span>
                <span class="postTime">5 mins ago</span>
            </div>
            <div class="postCenter">
              <div class="postCaption">
                Hellow I am Batman..! You understand..? I am batman..!!!
              </div>
              <img src="/images/img5.jpg" alt="" class="postedImage"/>
            </div>
            <div class="postBottom">
              <div class="postBottomLeft">
                <img src="/images/like.png" alt="" class="reactionPic"/>
                <img src="/images/hart.png" alt="" class="reactionPic"/>
                <img src="/images/haha.png" alt="" class="reactionPic"/>
                <span class="likeCount">Batman and 225 others</span>
              </div>
              <div class="postBottomRight">
                <span class="commentCount">
                  15 Comments
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}
