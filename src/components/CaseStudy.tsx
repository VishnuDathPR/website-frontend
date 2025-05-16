import { ArrowRight } from "lucide-react";
import Img from "next/image";
export default function CaseStudy () {
    return (
        <div className="relative min-h-screen" style={{ backgroundColor: "black" }}>
            <div className="relative w-full z-0 overflow-hidden rounded-lg shadow-lg">
             <Img
                      src="/faceimage.jpg"
                      alt="Face Background"
                       width={1280}
                       height={100}
                        // layout="fill"
                      className= "object-cover object-center object-[50%_30%]"
                      priority
                      />
                </div>
                 <div className="absolute bottom-10 right-10 w-[700px] md:w-[600px] h-[600px] bg-gradient-to-r from-black/60 to bg-black/40 backdrop-blur-md backdrop-saturate-100 text-white px-10 py-3 flex flex-col justify-center rounded-lg shadow-lg z-10">
    <div className="max-w-md space-y-6">
      <div className="text-6xl font-serif font-extrabold">❝</div>
      <p className="text-lg">
        We help your target audience see, understand, and trust the value your SaaS product delivers. We help your target audience see, understand, and trust the value your SaaS product delivers.
      </p>

      {/* Button */}
      <div className="relative group inline-block">
     <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-white/30 transition-opacity duration-300 z-10"></div>
         <button className="relative z-10 inline-flex items-center gap-1 bg-white text-black font-medium px-6 py-2 rounded-lg shadow-md
    transition-all duration-300
    hover:-translate-y-2 hover:-translate-x-1 hover:scale-[0.97]">
          Read case study<span>{"   "}</span>
          <ArrowRight className="relative bottom-0.5 right-2 left-3 top-0.7 rotate-300 text-black text-lg " />
        </button>
        </div>

      {/* Footer Info */}
      <div className="pt-6">
        <p className="text-xl font-semibold">Mevrik Samson</p>
        <p className="text-gray-400">CEO, Company Name</p>
      </div>

      {/* Navigation */}
      <div className="pt-6 flex justify-between items-center">
        <div className="space-x-2">
          <button className="bg-black border border-white px-4 py-2 rounded-md">← Prev</button>
          <button className="bg-black border border-white px-4 py-2 rounded-md">Next →</button>
        </div>
        <a href="#" className="text-sm hover:text-gray-300">View all ↗</a>
      </div>
    </div>
  </div>
            

        </div>
    )
}