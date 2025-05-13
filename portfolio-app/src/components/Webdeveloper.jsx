import React from 'react';
import './Projects.css';
import {useNavigate} from 'react-router-dom';

const Webdeveloper = () => {
    let navigate=useNavigate();
    let capstone=[{
        "id":1,
        "name":'Facturo',
        "description":"The Facturo is a restaurent management applicaition where customer can order the food, book the table seamlessly.user friendly for management team like they can add new food items and add the staff",
        "skills":['html','css','javascript','react','python','django'],
    },
    {
        "id":2,
        "name":"Real Time Chat Appliacation",
        "description":"It is Real time chat application developed using django as core backend framework.it enables users to communicate with each other through direct messages.",
        "skills":['python','django','django channels','web sockets']
    },
    {
        "id":3,
        "name":"E-shop",
        "description":'E-shop is a e-commerce webiste where user can find all electronics products like Fridge,TV,AC,Washine Machine etc',
        "skills":['python','django']
    },
    {
        "id":4,
        "name":"Simple Calculator",
        "description":'it is simple calculator which we use for mathematical calculations like addition,subtraction,multiplicaion etc',
        'skills':['java script','html','css']
    },
    {
        "id":5,
        "name":'To-Do',
        "description":'To-Do app is a productivity tool that allows users to manage taks efficienlty.users can add new tasks,marks them as completed,edit existing ones and delete tasks they not longer need',
        "skills":['python','django']
    }
]
 const handlesubmit=()=>{
        navigate('/Projects')
    }
    return (
        <div className='project'>
            <input type="submit" onClick={handlesubmit} value='back' />
            <ul>
                {
                    capstone.map((obj)=>{
                        return (
                            <li key={obj.id}>
                                <div><strong>Project Name:</strong>{obj.name}</div>
                                <div><strong>Project Description:</strong>
                                    <p>{obj.description}</p>
                                    </div>
                                <div><strong>Skills:</strong>{obj.skills.join(', ')}</div>
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    );
}

export default Webdeveloper;
