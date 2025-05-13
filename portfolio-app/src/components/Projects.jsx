import React, { useState } from 'react';
import './Projects.css';
import {useNavigate} from 'react-router-dom'
const Projects = () => {
    const [selectcomponent,setselectcomponent]=useState(null);
    const navigate=useNavigate();

    let project=[
        {
        "id":1,
        "name":"Web Developer",
        "image":"https://th.bing.com/th/id/OIP.UEqWZ1gBLpcWpF7cmAidVwHaE8?rs=1&pid=ImgDetMain"
        },
        {
            "id":2,
            "name":"Data Science",
            "image":"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg"
        }
        ]
        const handleclick=(name)=>{
            setselectcomponent(name);

        }
    return (
        <div className='project'>
            <ul>
                 {
            project.map((obj)=>{
                return (
                    <li key={obj.id}>
                        <div className='name'>{obj.name}</div>
                        <div><img src={obj.image} alt="" /></div>
                        <button onClick={()=>handleclick(obj.name)}>More Info</button>
                    </li>
                )                    
                
            })
          }
            </ul>
            {
                selectcomponent ==='Web Developer' && navigate('/webdeveloper')

            };
            {selectcomponent === 'Data Science' && navigate('/datascience')}
         
        </div>
    );
}

export default Projects;
