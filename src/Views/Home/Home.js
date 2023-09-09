import React from "react";
import './Home.css'

export default function Home() {

  return(
    <div
      className="container-home"
    >

      <a href="/flex"> Go to Flex </a>
      <a href="/styled"> Go to Styled </a>
            <a href="/styled"> Go to Styled </a>


      <p>Home</p>
      
      <div className="box" > Box </div>
      <div className="box2" > Box </div>
      <img
        src={'https://png.pngtree.com/png-clipart/20230405/original/pngtree-cartoon-cute-cat-sticker-kitty-kitten-png-image_9029295.png'}
        className="imageclass"
      /> 

    </div>
  )
}