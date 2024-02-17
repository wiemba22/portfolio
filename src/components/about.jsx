import wave from '../assets/wave.svg'
import pink2 from '../assets/pink2.png'
import black from '../assets/black.png'
const About = () => {
    return(
        <section id='About' className="bg-white  w-screen h-fit  ">
            <div className='w-full'>
            <div className='bg-black hidden phone:block w-full h-[50px]'></div>
            
                <img src={wave} alt="wave" className='w-full' />
            </div>
            <div className='flex flex-row h-3/4 w-full md:justify-normal justify-center gap-10 lg:gap-20'>
                <div className=' hidden md:block w-1/3 h-full mt-5 relative'>
                    <img src={black} alt="black" className=' absolute top-16  left-8 lg:left-20 w-4/5' />
                    <img src={pink2} alt="pink" className=' absolute left-14 lg:left-28  top-24 w-4/5 ' />
                </div>
                
    <div className=' relative w-3/4 phone:w-2/3 h-full  md:w-2/3'>
                   
                    <div className='md:pt-10 flex flex-col w-[93%]  h-full  gap-4 lg:gap-7'>
                            <div className='font-poppins mt-10 font-bold text-xl phone:text-2xl md:text-[3vw] flex  flex-col lg:gap-2'>
                                <h1 >Hello,want to </h1>
                                <h1 className='flex flex-row items-center '> Know ,<h1 className=' bg-primary  text-nowrap text-white p-2'>who I am ?</h1></h1>
                            </div>
                            <h6 className=' font-poppins text-md phone:text-xl md:text-[2vw] leading-relaxed'>As a second-year computer engineering student, I am passionate about shaping an innovative future in a world where technology's potential is limitless. Beyond my technical prowess, I bring a rich set of soft skills to the table. With effective communication and a collaborative spirit, I embark on a continuous quest for knowledge, exploring computer science frontiers beyond the classroom. Thriving on challenges, I refine my technical skills through diverse projects and programming competitions, fostering teamwork, adaptability, and problem-solving. Join me in delving into the realm of complex systems. Together, let's navigate challenges with a commitment to innovation, empathy, and a fervent desire to make a meaningful impact on the world.</h6>
                    </div>
                </div>

            </div>
        </section>
    
    )}; 
export default About ; 