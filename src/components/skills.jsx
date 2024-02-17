import Card from "./skillcard";
import { cards } from "../const";
import wave from '../assets/wavepink.svg'
const Skills = () => {
    return ( 
        <section id="Skills" className=" bg-white flex flex-col justify-start items-center   gap-10 w-screen h-fit pb-10 ">
                                <div className='w-full'>
            
            <img src={wave} alt="wave" className='w-full' />
        </div>
             <div className='text-2xl sm:text-4xl bg-primary text-white font-pops  p-2 lg:w-1/6 h-[50px] text-center' >
                <h2>Skills </h2>
            </div>
            <div className=" w-full flex flex-row  flex-wrap gap-16 justify-center items-center px-5">
                {cards.map((card)=>(
                    <Card titre={card.titre} skills={card.skills} img={card.image}/>
                ))}
            </div>
        </section>
     );
}
 
export default Skills;