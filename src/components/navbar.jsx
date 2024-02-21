import shape from "../assets/shape.png"

import { navLinks } from "../const" 
import {React,useState,useEffect} from "react"
import { Link, link} from "react-router-dom"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"  
import logo from '../assets/ll.svg'
const Navbar = () => {
    const [active,setActive] = useState("");
    const [toggle,setToggle] = useState(false);
    return(
       
            <div className="flex flex-row w-screen z-40 fixed top-0 "> 
                <div className="w-2/6 h-16 bg-[#5D5D5D] opacity-80 flex flex-col items-center p-2 ">
                    
                   <Link to ='/' onClick={()=>{setActive("");window.scrollTo(0,0)}}> 
                   <img src={logo} alt="hi" />
                   
                    </Link>
                </div>
                <div className="w-4/6 h-16 bg-[#5D5D5D] opacity-80 flex flex-col items-center justify-center  ">
                    <ul className=" list-none hidden md:flex flex-row  gap-4 md:gap-[30px] lg:gap-12 font-pops">
                             {navLinks.map((link) => (
                                     <li key={link.id} className={`text-white hover:text-primary text-[12px] md:text-[15px] lg:text-[18px] cursor-pointer font-medium`} onClick={()=>{setActive(link.title)}}>
                                     <a href={`#${link.id}`}>{link.title}</a>
                                      </li>          
                               ))}
                    </ul>    
                    <div className=' md:hidden flex flex-col justify-end  absolute  top-5   right-6 items-center'>
                        <div className="w-full flex flex-row justify-end">
                        <img src={toggle ? close :menu} alt="menu" className=' w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle)} />
                        </div>
                        <div className={`${!toggle ? 'hidden' : 'flex'} pt-5 w-full bg-tb p-5 z-20 text-right  rounded-xl`}>
                            <ul className=' list-none flex justify-end items-start flex-col gap-4'>
                                    {navLinks.map((link) => (
                                            <li key={link.id} className={`text-white hover:text-primary font-popstext-[16px] cursor-pointer font-medium`} onClick={()=>{setActive(link.title);setToggle(!toggle);}}>
                                            <a href={`#${link.id}`}>{link.title}</a>
                                           </li>
              
                                      ))}
                            </ul>
                        </div>
        </div>
                </div>
            </div>

       
    );
}

export default Navbar
  