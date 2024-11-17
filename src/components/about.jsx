import wave from '../assets/wave.svg'
import pink2 from '../assets/pink2.png'

import girl from '../assets/hijabi.png';
const About = () => {
    return (
        <section id='About' className="bg-white  w-screen h-full pb-32 ">
            <div className='w-full'>
                <div className='bg-black hidden phone:block w-full h-[20px]'></div>

                <img src={wave} alt="wave" className='w-full' />
            </div>

            <div class="flex flex-row w-full justify-center items-center lg:gap-20 ">
                <div class="hidden md:block w-1/3 mt-48">

                    <img src={girl} alt="black" className=' w-full' />

                </div>


                <div className=' w-2/3 md:w-1/2'>

                    <div className=' h-full flex flex-col items-start w-full md:w-5/6 gap-4 lg:gap-8 pt-10'>
                        <div className='font-pops mt-10 font-bold text-lg phone:text-2xl md:text-[2.5vw] '>
                            <h1 >Hello,want to </h1>
                            <h1 className='flex flex-row items-center '> Know ,<h1 className=' bg-primary  text-nowrap text-white p-2'>who I am ?</h1></h1>
                        </div>
                        <div>
                            <h6 className='font-pops font-light text-md phone:text-xl md:text-[2vw] leading-relaxed'>
                            As a pre-graduate computer engineer in my final year,
                             I am deeply passionate about cybersecurity and the critical 
                             importance of securing digital systems. I am fascinated by 
                             the ever-evolving landscape of cyber threats and the challenges they pose.
                              My focus is on gaining practical experience and refining my skills in cybersecurity, 
                              aiming to contribute to creating secure, resilient systems in a world that is increasingly
                               reliant on technology. As I approach the end of my academic journey, I am excited to apply
                                my knowledge in a professional setting and take the next step toward a career in cybersecurity.                            </h6>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
};
export default About;


