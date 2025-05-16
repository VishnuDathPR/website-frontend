import { ArrowRight } from "lucide-react";
export default function Connect() {
    return ( 
    <div className="relative min-h-screen"style={{backgroundColor: "black" }}>
        {/* <div className="relative flex flex-col justify-center items-center left-250 w-[56px] h-[36.47px] p-[0.49px] mt-4  z-10">
  <div className="absolute left-0 top-0 bottom-[0.8%] right-[34.25%] mix-blend-difference bg-white"></div>
  <div className="absolute left-[34.25%] top-0 bottom-[0.8%] right-0 mix-blend-difference bg-white/64"></div>
</div> */}

        <div className="flex py-20 px-30 text-white font-sm text-[4rem] items-start" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Connecting <br/>
        ++ product and people</div>
            <div className=" mt-0.5 w-full h-[0.5px] bg-gray-300"></div>
            <div className="relative flex justify-between px-20 gap-10 mt-10">
            <div className=" left-20 px-8 mt-10 text-gray-400 text-lg font-sora">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, possimus. 
            Corporis praesentium, repudiandae expedita quos, earum laudantium perferendis nemo atque adipisci unde molestias explicabo pariatur eaque hic facere, ab enim.</div>
            <div className=" left-80 px-50 mt-10 text-gray-400 text-lg font-sora ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, possimus. 
            Corporis praesentium, repudiandae expedita quos,earum laudantium perferendis nemo atque adipisci unde molestias explicabo pariatur eaque hic facere, ab enim.</div>
            </div>
            <div className="gap-10 px-25 py-25">
            <div className="group inline-block relative rounded-lg transition-all duration-300">
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

    )
}