import React from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 


const Projects = () => {
    let header = {
        headerTitle:"Modern Kitchan" ,   
        headerDescribe:`It is a long established fact that a reader will be distracted by the of 
        readable content of page lookings at its layouts points.` ,
        }
 
    let projectsBox = [
        {
            image:project1 ,   
            title:"Modern Kitchan" ,   
            describe:"Decor / Artchitecture" ,
            link:"#",  
        },
        {
            image:project2 ,   
            title:"Modern Kitchan" ,   
            describe:"Decor / Artchitecture" ,
            link:"#",     
        },        {
            image:project3 ,   
            title:"Modern Kitchan" ,   
            describe:"Decor / Artchitecture" ,
            link:"#",     
        },
        {
            image:project4 ,   
            title:"Modern Kitchan" ,   
            describe:"Decor / Artchitecture" ,
            link:"#",     
        }
    ];

    return (    
    <div className='projects'>
        {
        <div className='header'>
            <h1>
              {header.headerTitle} 
            </h1>
            <p>
                 {header.headerDescribe} 
            </p>
        </div>  
        }
        <div className='container'>
           {
            projectsBox.map((data) => (     
            <div className='box'>
            <div className='img'>
            <img src={data.image} alt='Article 1' />
            </div>
            <div className='info'>
            <div className='details'>
            <h1>{data.title}</h1>
            <p>{data.describe}</p>
            </div>
            <a href={data.link} className='go-to'>
            <span>
            <FontAwesomeIcon icon={faAngleRight} />
            </span>
            </a> 
          </div>
        </div>   
          ))
          }
        </div>     
    </div>   )
}

export default Projects;