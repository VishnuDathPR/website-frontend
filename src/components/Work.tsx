import Image from "next/image";
export default function Work () {
    return (
        <div className="relative min-h-screen" style={{ backgroundColor: "rgba(243, 245, 232, 1)" }}>
            <div className="flex gap-40 py-20 max-w-7x1 mx-auto ">
            <div className="flex text-black pl-30 text-[4rem]">What <p className="italic px-5 font-bold " >we</p> do </div>
                <div className="text-gray-400 max-w-md pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia libero sint ea a quam quod unde porro enim consectetur illo veritatis repellendus culpa. Consequatur excepturi fugiat cupiditate dolorum ipsam!</div>
             </div>
             <div className="relative  w-full h-screen">
             <div className="w-full h-[1px] bg-gray-400"></div>
             <div className="absolute top-0 left-0 w-full h-full flex justify-between px-[26%] pointer-events-none">
    <div className="w-[1px] h-full bg-gray-400" />
    <div className="w-[1px] h-full bg-gray-400" />
    <div className="w-[1px] h-full bg-gray-400" />
  </div>
   <div className="absolute top-10 left-0 w-full h-full px-[10%] flex justify-between text-black mx-auto">
    {[
      { text: "Transcending\n time with\n technology", img: "/wheel.png",},
      { text: "Transcending\n time with\n technology", img: "/.png" },
      { text: "Transcending\n time with\n technology", img: "/wave.png" },
      { text: "Transcending\n time with\n technology", img: "/earth.png" }
    ].map((item, index) => (
      <div key={index} className="w-1/4 ml-30 flex flex-col items-start">
        <div className="font-semibold mb-4 whitespace-pre-line text-left">
          {item.text}
        </div>
        <div className="relative w-full h-[200px] rounded-md overflow-hidden mb-4">
        <Image
          src={item.img}
          alt={`Image ${index + 1}`}
          fill
          className="object-contain rounded-lg"
          priority
        />
        <div className="">
        <div className="text-gray-400 ml-8 mt-25 font-semibold leading-relaxed text-sm">We help your target audience <br/>see, understand, and trust the <br/> value your SaaS product<br/> delivers</div>
        </div>
        </div>
      </div>
    ))}
  </div>
  
             </div>
        </div>
    )
}