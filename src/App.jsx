import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
const App = () => {

  const [play, setPlay] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer' />
      </div>
      <Programs />
      <div className='container'>
        <About setPlay={setPlay} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <div className='container'><Footer /></div>
      </div>
      <VideoPlayer play={play} setPlay={setPlay} />
    </div>
  )
}

export default App