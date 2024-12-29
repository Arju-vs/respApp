import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'
const About = ({setPlay}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_img} alt="" className="play-img" onClick={()=>{
              setPlay(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>About</h3>
            <p>At EduCity, we believe that education is a lifelong journey and the cornerstone of personal and professional growth. Our mission is to provide learners of all ages with access to high-quality resources, expert-guided courses, and a supportive community to help them thrive.</p>
            <p>Whether you're pursuing a new skill, preparing for a career, or simply expanding your knowledge, we are here to guide you every step of the way. With innovative tools and personalized learning experiences, we strive to make education accessible, engaging, and impactful for everyone.</p>
        </div>
    </div>
  )
}

export default About