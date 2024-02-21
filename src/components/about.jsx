import wave from '../assets/wave.svg'
import pink2 from '../assets/pink2.png'

import girl from '../assets/girl.png';
const About = () => {
    return (
        <section id='About' className="bg-white  w-screen h-full pb-32 ">
            <div className='w-full'>
                <div className='bg-black hidden phone:block w-full h-[20px]'></div>

                <img src={wave} alt="wave" className='w-full' />
            </div>

            <div class="flex flex-row w-full justify-center items-center lg:gap-20 ">
                <div class="hidden md:block w-1/3 mt-5">

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
                                As a pre-graduate computer engineer, I'm deeply fascinated by the world of technology, particularly in the realms of cybersecurity and machine learning. My passion lies in exploring how these fields intersect, and I'm eager to delve into projects and learning opportunities that allow me to further explore their potential. . My goal is to gain hands-on experience and deepen my understanding of these exciting areas as I progress in my academic and professional journey.
                            </h6>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
};
export default About;


