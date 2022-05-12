import React, { useState } from "react";
import Head from 'next/head'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import Typewriter from 'typewriter-effect';

export default function Home() {

  const [close, setClose] = useState();
  const [open, setOpen] = useState({ opacity: '0' });
  const [background, setBackground] = useState();
  const [load, setLoad] = useState('main-page');
  const [dropDown, setDropDown] = useState({ display: 'none' });

  const cmdClose = () => {
    setClose({ opacity: '0' });
    console.log('CLosing!');
  };

  const pageOpen = () => {
    setLoad('main-page scale-up-ver-top');
    setOpen({ opacity: '1' });
    setBackground({ backgroundColor: '#FFF' });
    console.log('Opening content!');
  };

  const enableDropDown = () => {
    setDropDown({ display: 'block' });
  }

  const disableDropDown = () => {
    setDropDown({ display: 'none' });
  }

  const current = new Date();
  const time = `${current.getHours()}:${current.getMinutes()}`;

  return (
    <div className="container">
      <Head>
        <title>Dallas Yatsinko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="container">
          <img src="/background3.png" className="macintosh" />
          <div className="scanline"></div>
          <div className="screen" style={background}>
            <div className="screen-content" style={close}>
              <Typewriter onInit={(typewriter) => {
                typewriter.start()
                  .pauseFor(1000)
                  .changeDelay(1)
                  // .typeString('Booting os 34.1...')
                  // .pauseFor(2500)
                  // .typeString('<br>Loading dom...')
                  // .pauseFor(1000)
                  // .typeString('<br>Loading assets...')
                  // .pauseFor(1600)
                  // .typeString('<br>Loading styles...')
                  // .pauseFor(1000)
                  // .typeString('<br>Loading bugs...')
                  // .pauseFor(0)
                  // .deleteAll(3)
                  .typeString('starting...')
                  .pauseFor(500)
                  .callFunction(cmdClose)
                  .pauseFor(500)
                  .callFunction(pageOpen);
              }} />
            </div>
            <div class="browser-window" style={open}>
              <div class="browser-top">
                <button class="browser-btn"><img src="https://win98icons.alexmeub.com/images/close-icon.png" /></button>
                <button class="browser-btn"><img src="https://win98icons.alexmeub.com/images/question-icon.png" /></button>
                <p>Homepage.html</p>
              </div>
              <div class="browser-content">
              {/* Nothing here yet */}
              </div>
            </div>
            <div class="taskbar-container" style={open}>
              <button class="taskbar-btn" onClick={enableDropDown}><img src="https://cdn.discordapp.com/attachments/682457469632774173/973025252634411058/unknown.png" />
                <div class="dropdown-content" style={dropDown}>
                  <a href="https://www.linkedin.com/in/kdyatsinko/"><img src="https://win98icons.alexmeub.com/icons/png/address_book_users.png" />LinkedIn</a>
                  <a href="https://github.com/okni-c"><img src="https://win98icons.alexmeub.com/icons/png/console_prompt-0.png" />GitHub</a>
                  <a href="https://soundcloud.com/okni-s"><img src="https://win98icons.alexmeub.com/icons/png/cd_audio_cd-0.png" />Music</a>
                </div>
                Start</button>
              <button class="taskbar-window">Homepage.html</button>
              <div class="taskbar-clock">
                <p class="clock-text">{time}</p>
              </div>
            </div>
            <div className={load} style={open} onClick={disableDropDown}>
              <div className="page-header">
                <div className="left-title">
                  <h1>Dallas Yatsinko</h1>
                  <h2>Front End Developer</h2>
                </div>
                <img src="/spinearth.gif" className="globe" />
              </div>
              <h3>Welcome to my website.</h3>
              <p>It's still in production, let me know if you encounter any bugs during your experience.</p>
              {/* <div className="links-btn">
                <a href="https://github.com/okni-c" className="btn">GitHub</a>
                <a href="https://www.linkedin.com/in/kdyatsinko/" className="btn">LinkedIn</a>
              </div> */}
              <img src="/carmove.gif" className="car" />

            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
