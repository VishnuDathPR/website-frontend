export default function Footer () {
    return (

        <div className="relative min-h-screen" style={{ backgroundColor: "rgba(243, 245, 232, 1)" }}> 
        <div className="flex mt-5 px-12 py-30 gap-16">
 
  <div className="flex flex-col gap-4 text-black">
    <div><p>Sri Sai Tower , No. 994, 1st Floor main, <br/> 
Koramangala 1st Block, Bengaluru <br/>
560034 </p></div>
    <div>admin@oxiumev.com </div>
    <div>+91 9778203391</div>
  </div>

 
  <div className="flex gap-16 ml-23">
    
    
    <div className="flex flex-col gap-3 text-black ml-12">
      <h2 className="text-lg font-semibold relative w-fit group">
        <span className="group-hover:border-b group-hover:border-white transition-all duration-300 border-b-0">
          LINKS
        </span>
      </h2>
      <div className="flex flex-col gap-2 text-sm">
        <span><a href="/about">About</a></span>
        <span><a href="/team">Team</a></span>
        <span><a href="/blogs">Blogs</a></span>
        <span><a href="/technologies">Technologies</a></span>
        <span><a href="/services">Services </a></span>
      </div>
    </div>

   
    <div className="flex flex-col gap-3 text-black">
      
        <span className="text-lg font-semibold transition-colors duration-200">
            <h2>COMPLIANCE</h2>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
      <div className="flex flex-col gap-3 text-sm">
        <span><a href="/terms&conditions">Terms and Conditions</a></span>
        <span><a href="/privacypolicy">Privacy Policy</a></span>
      </div>
    </div>

   
    <div className="flex flex-col gap-3 text-black">
      <h2 className="text-lg font-semibold">SOCIALS</h2>
      <div className="flex flex-col gap-2 text-sm">
        <span><a href="https://www.linkedin.com/company/oxium-energy">LinkedIn</a></span>
        <span><a href="https://www.instagram.com">Instagram</a></span>
        <span><a href="https://www.x.com/">Twitter</a></span>
     </div>
</div>
 </div>
</div>           
        </div>
    )
}