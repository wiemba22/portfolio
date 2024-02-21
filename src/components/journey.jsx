
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { journies } from '../const';
import shape from '../assets/shape.png';

import React from 'react';
import wave from '../assets/wavewhite.svg'; 
//bg-[#fc346d61]

const Journey =() =>{
    return(
        <section id='Journey' className=" bg-black relative w-screen h-fit  flex flex-col items-center justify-center  pb-10  "> 
                    <div className='w-full'>
            
            <img src={wave} alt="wave" className='w-full' />
        </div>
                        <div className=" w-full phone:w-2/6 h-full  flex flex-col items-center">
                    <img src={shape} alt="shape" className="absolute top-20 left-[-10px]  w-1/2 phone:w-1/4"/>

                </div>
                <h2 className='text-2xl sm:text-4xl text-primary font-pops font-bold  text-center p-8'>Journey </h2>  
            <div className='w-full h-full '>
            <VerticalTimeline>
                {journies.map((link) => (
                    <VerticalTimelineElement
    className={link.className}
    contentStyle={link.contentStyle}
    contentArrowStyle={link.contentArrowStyle}
    date={link.date}
    iconStyle={link.iconStyle}>
    
    <h3 className="vertical-timeline-element-title">{link.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{link.subtitle}</h4>
    <p>{link.skills}</p> 
 
  </VerticalTimelineElement>
                ))}


</VerticalTimeline>
            </div>


        </section>
    )

};
export default Journey ; 