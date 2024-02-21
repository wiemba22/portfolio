const colarray = ["#FFF0C9", "#C9EFFF", "#E7C9FF", "#C9FFF2", "#C9FFFF", "#C9FFD2", "#DEFFC9"];
const getRandomElementFromArray = (array) => {
    return array.length === 0 ? undefined : array[Math.floor(Math.random() * array.length)];
};
const Projects = ({ title = '', img = '', description = '', techs = [] }) => {
    return (
        <div className="w-[350px] phone:w-[450px] md:w-[600px] h-fit flex flex-col items-center justify-center  gap-6 p-4 text-white bg-transparent">


            <h1 className=' font-semibold font-pops text-lg lg:text-2xl w-full'>{title}</h1>


            <div className=' object-contain  '>
                <img src={img} alt="me" />
            </div>

            <div className='  h-[50%]'>
                <p className=" text-[16px] md:text-lg font-light font-pops">{description}</p>
            </div>
            <div className='flex flex-row flex-wrap items-center justify-start w-full p-2 gap-1'>
                {techs.map((tech) => (
                    <div key={tech.id} style={{ backgroundColor: "white" }} className={` w-fit text-black text-sm lg:text-lg font-pops px-3 border-solid border-2 shadow-md rounded-lg `}>
                        <h6>{tech.id}</h6>
                    </div>
                ))}
            </div>
            <div className='h-fit w-full underline text-primary'>
                <a href="####" ><p className=" text-lg">Github Repository</p></a>
            </div>

        </div>


    );
}

export default Projects;