import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

function scrollBack() {
  const test = document.getElementById("top")
   test.scrollIntoView({behavior:'smooth', block: 'end'})
}
// changes id of 
function spin() {
  document.getElementById('cute').setAttribute('id', 'pressed');
}

function App() {
  return (
    <>
    <html>
    <head>
    <title>Felipe Pavanelli</title>
    </head>
      <header>
        <nav className="navigation"> 
            <a>About</a>
            <a>Contact</a>
            <a>Projects</a>
        </nav>
    </header>

    <section className="cover-section">
        <div className="name">
        <h1 id= "top">Hello! I'm Felipe :) </h1>
        </div>
        <section className="main-images">
        <img src="src/images/felipe.jpg" height="450" width="350"/>
        <img src="src/images/tree.jpg" height="450" width="350"/>
        </section>
    </section>

    <section id="nice-meeting-you">
        <div className="name">
        <h1>Nice meeting you!</h1>
        </div>


        <div id="introduction">
        <p>My name is Felipe Pavanelli. 
        I am an international '26 from Brazil</p> <p>and 
        I am very excited to have you in my personal website!
        </p>

        <p>
        Here you can find my latest coding projects, witten works, </p>
        <p> as well as pieces of artistic expression. Make yourself at home :)
        </p>
        </div>
        <div className="main-images">
            <img src="src/images/brasil.jpeg" height="450" width="350"/>
            <img src="src/images/funny.jpg" height="450" width="350"/>
        </div>
        <button id="cute" onClick={spin}>spin me!</button>
    </section>

    <section>
        <div id="facts">
        <h1 className="name">Fun/Weird facts about me</h1>
        <p>Here are some things about me that you will either like or cringe at</p>
        <ul>
            <li>I am definitely not made for Hanover weather, yet I choose to study here</li>
            <li>I have never ridden a horse</li>
            <li>I like cooking for my friends, especially baking</li>
        </ul>
        <p>Here's some funny bread-related pictures</p>

        <section className="main-images">
          <img id="new-pic" src="src/images/bread.jpg" height="500" width="400"/>
          <img id = "breading" src="src/images/bread2.jpg" height="500" width="400"/>
        </section>   
        <button id="back" onClick={scrollBack}>bring me back!</button>

        </div>
    </section>
    </html>
    </>
  )
}

export default App
