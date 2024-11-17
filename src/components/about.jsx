import wave from '../assets/wave.svg'
import pink2 from '../assets/pink2.png'
import girl from '../assets/hijabi.png';

const About = () => {
    return (
        <section id='About' className="bg-white w-screen h-full pb-32">
            <div className='w-full'>
                <div className='bg-black hidden phone:block w-full h-[20px]'></div>
                <img src={wave} alt="wave" className='w-full' />
            </div>

            <div className="flex flex-row w-full justify-center items-center lg:gap-20">
                <div className="hidden md:block w-1/3 mt-48">
                    <img src={girl} alt="girl" className='w-full' />
                </div>

                <div className='w-2/3 md:w-1/2'>
                    <div className='h-full flex flex-col items-start w-full md:w-5/6 gap-4 lg:gap-8 pt-10'>
                        <div className='font-pops mt-10 font-bold text-lg phone:text-2xl md:text-[2.5vw]'>
                            <h1>Hello, want to</h1>
                            <h1 className='flex flex-row items-center'>
                                Know, 
                                <span className='bg-primary text-nowrap text-white p-2'>who I am?</span>
                            </h1>
                        </div>
                        <div>
                            <p className='font-pops font-light text-sm phone:text-lg md:text-[1.8vw] leading-relaxed tracking-wide'>
                            As a final-year computer engineering student, I'm passionate about cybersecurity and its role in protecting digital systems. I’m focused on gaining hands-on experience to refine my skills and contribute to building secure, resilient systems. As I approach the end of my studies, I'm eager to apply my knowledge and advance my career in cybersecurity.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
