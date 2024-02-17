const Card = ({titre='',skills=[],img=''}) => {
    return ( 
        <div className="w-[350px]  h-fit phone:h-[250px] bg-white flex flex-col items-center gap-4 justify-start pt-8 border-solid border-gray-500 border-2 rounded-lg">
            <div className='w-full h-[5px] bg-[#5D5D5D]'></div>
            <h2 className='text-[#5D5D5D] font-bold font-poppins text-xl'>{titre}</h2>
            <img src={img} alt="img" className=" w-[40px] h-[40px]" />
            <div className='flex flex-row flex-wrap items-center justify-start w-full p-2 gap-1'>
                {skills.map((skill)=>(
                    <div className={` bg-[#FDCEE6] w-fit text-lg font-poppins px-2 border-solid border-2 shadow-md rounded-lg `}><h6>{skill.id}</h6></div>
                ))}
            </div>

        </div> 
    );
}
 
export default Card;