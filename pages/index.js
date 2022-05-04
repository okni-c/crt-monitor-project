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
    setBackground({ backgroundColor: '#FFF' })
    console.log('Opening content!');
  };

  return (
    <div className="container">
      <Head>
        <title>Dallas Yatsinko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="container">
          <img src="/Background2.png" className="macintosh" />
          <img src="/scanlines.png" className="scanlines" />
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
            <div className={load} style={open}>
              <div className="page-header">
                <h1>Welcome to my site.</h1>
                <img src="/spinearth.gif" className="globe" />
              </div>
              
              <div className="links">
                <a className="btn" href="/">Projects</a>
                <a className="btn" href="/">Jobs</a>
                <a className="btn" href="/">About</a>
                <a className="btn" href="/">Contact</a>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
