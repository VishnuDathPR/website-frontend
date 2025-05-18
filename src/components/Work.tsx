import Image from "next/image";

export default function Work() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "rgba(243, 245, 232, 1)" }}
    >
      {/* Title Section */}
      <div className="flex gap-40 py-20 max-w-7xl mx-auto">
        <div className="flex text-black pl-30 text-[4rem]">
          What{" "}
          <p className="italic px-5 font-bold">
            we
          </p>{" "}
          do
        </div>
        <div className="text-gray-400 max-w-md pr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia
          libero sint ea a quam quod unde porro enim consectetur illo veritatis
          repellendus culpa. Consequatur excepturi fugiat cupiditate dolorum
          ipsam!
        </div>
      </div>

      {/* Grid Section */}
      <div className="relative w-full h-screen">
        {/* Horizontal and Vertical Lines */}
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-[25%] pointer-events-none z-10">
          <div className="w-[1px] h-full bg-gray-400" />
          <div className="w-[1px] h-full bg-gray-400" />
          <div className="w-[1px] h-full bg-gray-400" />
        </div>

        {/* Content Columns */}
        <div className="absolute left-0 w-full h-full whitespace-pre-line flex justify-between mx-auto">
          {[
            {
              text: "Transcending\n time with\n technology",
              img: "/circle.png",
            },
            {
              text: "Transcending\n time with\n technology",
              img: "/atomrotation.png",
            },
            {
              text: "Transcending\n time with\n technology",
              img: "/sinewave.png",
            },
            {
              text: "Transcending\n time with\n technology",
              img: "/globe.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group w-1/4 h-full flex flex-col items-start bg-[#f3f5e8] hover:bg-black transition-colors duration-300 px-6 py-8"
            >
              {/* Heading Text */}
              <div className="font-semibold mb-4 witespace-pre-line text-left text-black group-hover:text-white transition-colors duration-300">
                {item.text}
              </div>

              {/* Image with brightness filter */}
              <div className="relative w-full h-[200px] rounded-md mb-4 ">
                <Image
                  src={item.img}
                  alt={`Image ${index + 1}`}
                  fill
                  className=" mt-[2rem] object-contain rounded-lg brightness-8 transition-all duration-300 group-hover:invert"
                  priority
                />
              </div>

              {/* Description Text */}
              <div className="text-gray-400 mt-38 justify-between font-semibold leading-relaxed text-sm">
                We help your target audience <br />
                see, understand, and trust the <br />
                value your SaaS product<br />
                delivers
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
