import React from 'react'
import NavigBar from '../../components/Navigation/NavigBar'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from './../../components/RightPane/rightPane';
import "./home.css"

export default function Home() {
  return (
    <>
      <NavigBar/>
      <div class="bottomContainer">
        <LeftPane/>
        <PostPane/>
        <RightPane/>
      </div>
    </>
  )
}
