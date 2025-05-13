import React from 'react';
import './Projects.css';
import {useNavigate} from 'react-router-dom'

const Datascientist = () => {
    let navigate=useNavigate()
    let data=[
        {
            "id":1,
            "name":"Insurance Cost Prediction",
            "description":"this project involves building a machine learning model to predict the medical insurance cost of individulas based on personla attributes such as age,gender,BMI,number of children,smoking hannits and region/. the goal is to help insurance companies an assist customers in understanding how various factors impact their insurance expenses",
            "skills":['Python','Pandas','Scikit-Learn','NumPy','Matplotlib']
        

        },
        {
            "id":2,
            "name":"EarthQuake Damage Prediction",
            "description":"this project focuses on predicting the level of damage to buildings caused by earthquake using machine learning techniques.it uses structural and geographic features such as building age,height,geo_level_id,foundation type,and location. ths objective is to help diaster response teams and urban planners effectively in earhquake-prone areas",
            "skills":['Python','Pandas','Scikit-Learn','NumPy','Matplotlib','seaborn']

        },
        {
            "id":3,
            "name":"Flight price prediction",
            "description":"This project aims to build a machine learning model that predicts the price of flight tickets based on various features such as airline, source,destination,departure time,duration,number of stops and more. the Goal is to help users find optimal ticket prices and assist airlines and travel agencies in price forcasting",
            "skills":['Pandas','machine learning','Scikit-Learn']
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
                    data.map((obj)=>{
                        return (
                            <li>
                                <div><strong>Project Name:</strong>{obj.name}</div>
                                <div><strong>Project Description:</strong>{obj.description}</div>
                                <div><strong>Skills:</strong>{obj.skills.join(', ')}</div>
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    );
}

export default Datascientist;
