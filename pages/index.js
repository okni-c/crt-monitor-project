import Head from 'next/head'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dallas Yatsinko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="container">
          <img src="/Background.png" className="macintosh" />
          <img src="/scanlines.png" className="scanlines" />
          <div className="scanline"></div>
          <div className="screen">
            <div className="screen-content">
              <Typewriter
                options={{
                  strings: ['Hello world.', 'Welcome to my little computer.'],
                  autoStart: true,
                  deleteSpeed: '100'
                }}
              />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
