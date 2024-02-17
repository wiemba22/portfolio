import shape from "../assets/shape.png"
import me from "../assets/me.jpg" 
const Landing = () => {
    return(
        <section className="flex flex-col w-screen  h-screen overflow-x-hidden overflow-y-clip ">
        

            <div className="h-full  relative flex flex-col gap-5 bg-black phone:gap-0 phone:flex-row phone:mt-0 pt-[64px] ">
                <div className=" w-full phone:w-2/6 h-full  flex flex-col items-center">
                    <img src={shape} alt="shape" className="absolute top-5 left-[-10px]  w-1/2 phone:w-1/4"/>
                    <div className=" phone:hidden w-[250px] mt-8 border-solid border-primary  z-10 border-2 rounded-xl">
                         <img src={me} alt="me" className=" h-full w-full object-cover rounded-xl"/>
                    </div>

                </div>
                <div className="h-full w-0 phone:w-4/6 ">
                    <img src={me} alt="me" className=" h-full w-full object-cover"/>
                </div>
                <div className="phone:absolute  phone:bg-transparent  items-center phone:items-start flex flex-col pb-20 bottom-10 left-[20%]">
                    <div className="  text-xl phone:text-3xl md:text-5xl font-pops w-[300px] phone:w-full text-left text-white ">
                      <h3>My name is</h3>
                      <h1 className="font-bold mt-2">WIEM BEN AMOR </h1>
                    </div>
                    <div className="bg-primary p-5 text-center text-lg phone:text-2xl md:text-4xl w-[300px] phone:w-full font-pops  mt-2 phone:mt-4 md:mt-8 left-[20%]">
                        <h3 className="font-bold">I'M A SOFTWEAR ENGINEER </h3>
                    </div>
                </div>
            </div>  
        </section>
    );
}

export default Landing
  