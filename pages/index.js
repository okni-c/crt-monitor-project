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

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const time = `${current.getHours() - 12}:${current.getMinutes()}`;

  return (
    <div className="container">
      <Head>
        <title>Dallas Yatsinko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="container">
          <img src="/Background2.png" className="macintosh" />
          <div className="scanline"></div>
          <div className="screen" style={background}>
            <div className="screen-content" style={close}>
              <Typewriter onInit={(typewriter) => {
                typewriter.start()
                  .pauseFor(1000)
                  .changeDelay(1)
                  .typeString('Booting os 34.1...')
                  .pauseFor(2500)
                  .typeString('<br>Loading dom...')
                  .pauseFor(1000)
                  .typeString('<br>Loading assets...')
                  .pauseFor(1600)
                  .typeString('<br>Loading styles...')
                  .pauseFor(1000)
                  .typeString('<br>Loading bugs...')
                  .pauseFor(0)
                  .deleteAll(3)
                  .typeString('starting...')
                  .pauseFor(500)
                  .callFunction(cmdClose)
                  .pauseFor(500)
                  .callFunction(pageOpen);
              }} />
            </div>
            <div className="os-header" style={open}>
              <p className="os-header-text">🔎</p>
              <p className="os-header-text">{date}</p>
              <p className="os-header-text">{time}</p>
            </div>
            <img src="/taskbar.png" className="taskbar" style={open} />
            <div className={load} style={open}>
              <div className="page-header">
                <div className="left-title">
                  <h1>Dallas Yatsinko</h1>
                  <h2>Front End Developer</h2>
                </div>
                <img src="/spinearth.gif" className="globe" />
              </div>
              <h3>Welcome to my website.</h3>
              <p>It's still in production, let me know if you encounter any bugs during your experience.</p>
              <div className="links-btn">
                <a href="https://github.com/okni-c" className="btn">GitHub</a>
                <a href="https://www.linkedin.com/in/kdyatsinko/" className="btn">LinkedIn</a>
              </div>
              <img src="/carmove.gif" className="car" />
              
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
