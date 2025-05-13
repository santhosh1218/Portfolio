import React, { useState } from 'react';
import './Contacts.css';
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
const Contacts = () => {
    let [name,setname]=useState('')
    let [email,setemail]=useState('')
    let [message,setmessage]=useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
        alert('message sent successfully!')

    }
   
    return (
        <div className='contact'>
            <form action="" onSubmit={handlesubmit} className='form-content'>
            <h1>Contact Me</h1>
                <input type="text" placeholder='username' onChange={(e)=>setname(e.target.value)} required/><br/>
                <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)} required/><br/>
                <textarea name="" id="" onChange={(e)=>setmessage(e.target.value)} required></textarea><br/>
                <button type='submit'>send message</button>
            </form>
          
        <div className='contact-details'>
            <h1>Contact Details</h1>
            <h3>Santhosh Reddy Kommula</h3>
            <h3>santhoshkommula98@gmail.com</h3>
            <h3>mobile:+919652645095</h3>
            <a href="https://github.com/santhosh1218"><SiGithub /></a>
            <a href="https://www.linkedin.com/in/santhosh-kommula-bab033324/"><FaLinkedin/></a>
        </div>
        </div>
    );
}

export default Contacts;
