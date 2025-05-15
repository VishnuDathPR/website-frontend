import Img from "next/image";
import { ArrowRight } from "lucide-react";
export default function Vision() {
  return (
<div className="relative min-h-screen" style={{ backgroundColor: "rgba(243, 245, 232, 1)" }}>
      {/* Optional Navbar */}
      <nav className="bg-white px-6 py-9 shadow-md"></nav>

      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between px-[10%] py-[5%]  pointer-events-none">
        <div className="w-[1.5px] h-[50%] bg-gray-200"></div>
        <div className="w-[1.5px] h-[50%] bg-gray-200"></div>
        <div className="w-[1.5px] h-[50%] bg-gray-200"></div>
        <div className="w-[1.5px] h-[50%] bg-gray-200"></div>
        <div className="w-[1.5px] h-[50%] bg-gray-200"></div>
      </div>

      


      {/* Centered Text */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
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
        <div className="text-black item-center px-20 leading-relaxed text-[2rem] z-10">Case Studies</div>
        <div className=" text-center gap-5 py-5 text-black justify-center text-[3rem] ">
            <p> take a look at diverse <br/> challenges we have solved</p>
        </div>
      </div>
    <div className="flex px-20 py-30 gap-60 items-center">
      <div className="flex flex-col align-items:start">
        {["Option One", "Option Two", "Option Three", "Option Four"].map((option, index) => (
    <div key={index} className="relative group text-black py-5 cursor-pointer w-fit hover:font-bold">
      <span className="transition-all duration-200 group-hover:w-full">{option} </span>
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
     </div>
        ))}<div className="item-start py-15">
        <button className="flex items-start bottom-2 rounded-lg px-4 py-2 text-black border border-black" style={{ backgroundColor: "rgba(243, 245, 232, 1)" }}>Show all case study</button>
        </div>
        </div>
  {/* <div className="px-20 py-10 items-center"> */}
      {/* Image Container Box */}
      <div className="relative w-full max-w-3xl h-[400px] rounded-lg overflow-hidden shadow-lg">
        {/* Background Image */}
        <Img
          src="/red-bg.jpg"
          alt="Vision Background"
          width={300}
          height={414}
          objectFit="contain"
          layout="intrinsic"
          objectPosition="center"

          className=" inset-0rounded-lg shadow-lg w-full"
          />
          

        {/* Top-Left Text */}
        <div className="absolute top-4 left-4 z-10 text-white text-xl font-semibold">
          Our Vision
        </div>

        {/* Bottom-Left Button */}
        <div className="absolute bottom-4 left-4 z-10 text-black font-medium px-4 py-2 rounded-lg shadow-md shadow-white  shadow-[0_4px_rgba(255,255,255,0.2),_0_0_0_4px_rgba(255,255,255,0.1)]

 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:scale-[0.97] hover:bg-white hover:border bg-opacity-5 shadow-md">
          <button className="bg-white text-black px-4 py-2 flex items-center rounded-md shadow hover:bg-white-200 transition">
            Learn More
             <ArrowRight className="relative gap-3 right-3 left-3 top-0.2 rotate-300 text-black text-lg " />
          </button>
        </div>
        </div>
      {/* </div> */}
    
  </div>
  </div>
  );
}
