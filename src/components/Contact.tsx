export default function CaseStudy() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="text-white flex flex-col justify-between h-full">
            <div className="mt[-40px]">
          <h2 className="text-5xl md:text-4xl font-light leading-tight">
            There&apos;s an <br />
            innovation on <br />
            your mind?<br />
            <strong>Contact us!</strong>
          </h2>
            </div>
          <div className="mt-[100px]">
          <p className="text-sm text-gray-400 pt-6 max-w-sm">
            <span className="inline-block w-2 h-2 border border-white rounded-full mr-3 mt-1"></span>
             We help your target audience see, understand, and trust the value your SaaS product delivers.
          </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-black rounded-lg p-8 space-y-6 shadow-xl ">
          <form className="space-y-7">
            <div>
              <label className="block text-sm text-white mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name here"
                className="w-full p-3 rounded-md bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label className="block text-sm text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email here"
                className="w-full p-3 rounded-md bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label className="block text-sm text-white mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Message here"
                className="w-full p-3 rounded-md bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-md hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
