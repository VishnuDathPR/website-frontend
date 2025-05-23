
import { ArrowRight } from "lucide-react";
// import Image from ".next/Image";
// import "/hero-bg.jpg";
import Img from 'next/image';
//  import heroBg from '../public/herog-bg.jpg';



export default function HeroSection() {
  return ( 
  <div>
   <div className="relative scroll-contain w-full h-[600px]">
     <Img src= "/herog-bg.jpg" alt="Hero Background" layout="fill" objectFit="cover"
          />
   </div>


      <div className="text-x1 md:text-3x1 lg:text-4x1 text-center px-4">
        
        <div className="absolute bottom-5 left-15 text-white font-medium text-[2rem] md:text-[4rem] lg:text-[4rem]">
        Revolutionize{" "} <br/>
        <span className="bg-white text-black px-2 py-0.5 rounded">
          technology
        </span>{" to "}<p>
          transcend time
        </p>
        
      </div>
        <div className=" text-25x1 absolute bottom-8 right-6">
          <p className="text-lg md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> I
           animi aliquid earum reiciendis id quas eum!
          </p> 
          <br />
            <div className="relative group inline-block">
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-white/30 transition-opacity duration-300 z-0"></div>
            <button className="relative z-10 inline-flex items-center gap-1 bg-white text-black font-medium px-6 py-2 rounded-lg shadow-md
    transition-all duration-300
    hover:-translate-y-2 hover:-translate-x-1 hover:scale-[0.97]">
          find your solution<span>{"   "}</span>
          <ArrowRight className="relative bottom-0.5 right-2 left-3 top-0.7 rotate-300 text-black text-lg " />
        </button>
        </div>
            </div>
      </div>
      </div>
 
  );
}
