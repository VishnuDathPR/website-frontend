import { ArrowRight } from "lucide-react";
import Image from 'next/image';
export default function Transcend() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "black" }}>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-0"
        >
          <source src="/travel.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-white text-6xl space-y-4 font-bold ">
              <Image 
              src="/clock.png"
              alt="transcend"
              width={30}
              height={20}
              className="ml-[380px] mb-8"
               />
              Transcending time with <br /> technology
            </div>
            <div className="mt-10 gap-10 text-white text-lg font-normal max-w-7xl mx-auto">
              Addmore helps to ensure that your product connects with the right users, driving the growth for you.
            </div>
            <div className="mt-8 group inline-block relative rounded-lg transition-all duration-300">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-white/30 transition-opacity duration-300 z-0"></div>
            <button className="relative z-10 inline-flex items-center bg-white text-black font-medium px-5 py-2 rounded-lg shadow-md
    transition-all duration-300
    hover:-translate-y-1 hover:-translate-x-1 hover:scale-[0.97]">
          find your solution<span>{"   "}</span>
          <ArrowRight className="relative bottom-0.5 right-2 left-3 top-0.7 rotate-300 text-black text-lg " />
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
