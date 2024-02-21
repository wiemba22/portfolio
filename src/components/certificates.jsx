import { certifs } from "../const";
import Certif from "./certif";
import wave from '../assets/wave.svg'
const Certificates = () => {
  return (
    <section id="Certificates" className=" bg-white flex flex-col justify-start items-center   gap-5 w-screen h-fit pb-10 md:pb-20">
      <div className='w-full'>

        <img src={wave} alt="wave" className='w-full' />
      </div> 
      <div className='text-2xl sm:text-4xl  text-primary font-pops font-bold   lg:w-1/6 h-[50px] text-center' >
        <h2>Certificates </h2>
      </div>
      <div className=" w-full flex flex-row  flex-wrap gap-16 justify-center items-center px-5"> 
        {certifs.map((c) => (
          <Certif title={c.title} more={c.more} img={c.img} description={c.description} />
        ))}
      </div>

    </section>
  );
};

export default Certificates;
