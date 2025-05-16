import Img from "next/image";
import { ArrowRight } from "lucide-react";
export default function Vision() {
  return (
<div className="relative min-h-screen" style={{ backgroundColor: "rgba(243, 245, 232, 1)" }}>
      {/* Optional Navbar */}
      <nav className="bg-white px-6 py-9 shadow-md"></nav>
      items =

      {/* Vertical Lines */}
      <div className="absolute inset-0 z-0 flex justify-between px-[10%] py-[6%]  pointer-events-none">
        <div className="w-[1px] h-[40%] bg-gray-300 z-0"></div>
        <div className="w-[1px] h-[50%] bg-gray-300"></div>
        <div className="w-[1px] h-[45%] bg-gray-300 z-0"></div>
        <div className="w-[1px] h-[50%] bg-gray-300"></div>
        <div className="w-[1px] h-[50%] bg-gray-300"></div>
      </div>

      


      {/* Centered Text */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] z-20 px-4">
        <div className="absolute left-15">
        <div className=" flex items-start gap-5 bg-black text-white text-sm px-3 py-1 rounded-md cursor-pointer w-fit">
      <img src="/eye.svg" alt="Eye icon" className="w-4 h-4 bg-white" />
      <span>Vision</span>
        </div>
     </div>
        <p className="text-left text-black leading-relaxed text-[3rem] z-10">
          become pioneer shaping tomorrow<br />
          create technology that transcends time<br />
          embrace vision, forge legacy
        </p>
      </div>
      <div>
        <div className="text-black item-center px-20 leading-relaxed text-[2rem]"><p className="z-10">Case Studies</p></div>
        <div className=" text-center gap-5 py-5 text-black justify-center text-[3rem] ">
            <p className="z-10"> take a look at diverse <br/> challenges we have solved</p>
        </div>
      </div>
    <div className="flex px-20 py-20 gap-20 items-center">
      <div className="flex flex-col align-items:start">
        {["Automated human", "Option Two", "Option Three", "Option Four"].map((option, index) => (
    <div key={index} className="relative group text-black py-5 cursor-pointer w-fit hover:font-bold">
      <span className="inline-block transition-all duration-200 w-full">{option} </span>
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
     </div>
        ))}<div className="py-8 mt-4">
        <button className="inline-flex items-center rounded-lg px-6 py-3 text-black border border-black bg-[#F3F5E8] whitespace-nowrap text-base">Show all case study</button>
        </div>
        </div>
  {/* <div className="px-20 py-10 items-center"> */}
      {/* Image Container Box */}
      <div className="relative gap-20 left-0.5 w-[900px] h-[350px] rounded-lg overflow-hidden shadow-lg mr-10">
        {/* Background Image */}
        <Img
          src="/red-bg.jpg"
          alt="Vision Background"
           layout="fill"
        
          className=" w-[900px] h-[350px] rounded-lg shadow-lg"
          
          priority
          />
          

        {/* Top-Left Text */}
        <div className="absolute top-4 left-4 z-10 text-gray-200 text-xl font-semibold">
        <div>
          Machine learning for recipe recommendation
        </div>
        <div className=" mt-4 text-gray-400">Building an NLP-based system to understand <br /> cooking ingredients and refine user's dishes</div>
        </div>

        {/* Bottom-Left Button */}
        <div className="absolute bottom-4 left-4 z-10 group">
  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-white/30 transition-opacity duration-300 z-0"></div>
         <button className="relative z-10 inline-flex items-center gap-1 bg-white text-black font-medium px-6 py-2 rounded-lg shadow-md
    transition-all duration-300
    hover:-translate-y-2 hover:-translate-x-1 hover:scale-[0.97]">
          Read case study<span>{"   "}</span>
          <ArrowRight className="relative bottom-0.5 right-2 left-3 top-0.7 rotate-300 text-black text-lg " />
        </button>
        </div>
        </div>
      {/* </div> */}
    
  </div>
  </div>
  );
}
