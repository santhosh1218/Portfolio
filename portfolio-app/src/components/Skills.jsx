import React from 'react';
import './skill.css';

const Skills = () => {
    const skill=[{
        "programing_language":['Python','JavaScript'],
        "framework":['Django','React','Django RestFramework'],
        "databases":['MySQL','MongoDB'],
        "libraries":['NumPy','Pandas','TensorFlow','Scikit-Learn'],
        "dataScience":['CNN','ANN','RNN','Regression','Classification'],
        "visualization":['MatplotLib','Seaborn','PowerBI','Tableau']
    }]
    return (
        <div className='skill'>
            <ul>
                  {
                skill.map((obj)=>{
                    return (
                        <li>
                            <div><strong>Programing Languages:</strong>{obj.programing_language.join(', ')}</div>
                            <div><strong>Frameworks:</strong>{obj.framework.join(', ')}</div>
                            <div><strong>Databases:</strong>{obj.databases.join(', ')}</div>
                            <div><strong>Libraries:</strong>{obj.libraries.join(', ')}</div>
                            <div><strong>Data Science/ Machine Learning:</strong>{obj.dataScience.join(', ')} models</div>
                            <div><strong>Visualization</strong>{obj.visualization.join(', ')}</div>

                        </li>
                        
                    )
                })
            }
            </ul>
        </div>
    );
}

export default Skills;
