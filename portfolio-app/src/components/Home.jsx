import React from 'react';
import profileimg from './profile.jpg';
import './Home.css';
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
const Home = () => {
    return (
        
        <div className='Home'>
            <div className='Home-text'>
            <h1>Hi..! its me </h1><br />
            <h1>I am Santhosh Reddy Kommula</h1> <br />
            <p>I am a Python Developer and Data Scientist </p>
            <a href="https://github.com/santhosh1218"><SiGithub /></a>
            <a href="https://www.linkedin.com/in/santhosh-kommula-bab033324/"><FaLinkedin/></a>
            </div>
            <img src={profileimg} alt="" />
        </div>
        
    
    );
}

export default Home;
