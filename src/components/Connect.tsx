import { ArrowRight } from "lucide-react";
export default function Connect() {
    return ( 
    <div className=" scroll-contain relative min-h-screen"style={{backgroundColor: "black" }}>
        {/* <div className="relative flex flex-col justify-center items-center left-250 w-[56px] h-[36.47px] p-[0.49px] mt-4  z-10">
  <div className="absolute left-0 top-0 bottom-[0.8%] right-[34.25%] mix-blend-difference bg-white"></div>
  <div className="absolute left-[34.25%] top-0 bottom-[0.8%] right-0 mix-blend-difference bg-white/64"></div>
</div> */}

        <div className=" scroll-section flex py-20 text-white font-sm text-[6rem] justify-center items-center text-center">Connecting <br/>
        ++ product and people</div>
            <div className=" mt-2 w-full h-[1px] bg-gray-200"></div>
            <div className="relative flex justify-between px-20 gap-10 mt-10">
            <div className=" left-20 px-8 mt-10 text-gray-200 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, possimus. <br />
            Corporis praesentium, repudiandae expedita quos,<br/> earum laudantium perferendis nemo atque adipisci unde molestias explicabo pariatur eaque hic facere, ab enim.</div>
            <div className=" left-80 px-50 mt-10 text-gray-200 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, possimus. <br />
            Corporis praesentium, repudiandae expedita quos,<br/> earum laudantium perferendis nemo atque adipisci unde molestias explicabo pariatur eaque hic facere, ab enim.</div>
            </div>
            <div className=" gap-10 px-25 py-25">
            <button className="group inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-lg shadow-md shadow-white  shadow-[0_4px_rgba(255,255,255,0.2),_0_0_0_4px_rgba(255,255,255,0.2)]

 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:scale-[0.97] hover:bg-white -md ">
          find your solution<span>{"   "}</span>
          <ArrowRight className="relative bottom-0.5 right-2 left-3 top-0.7 rotate-300 text-black text-lg " />
        </button>
            </div>


    </div>

    )
}