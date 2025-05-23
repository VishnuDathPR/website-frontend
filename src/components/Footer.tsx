import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';


export default function Footer() {
  return (
    <div className="relative min-h-screen bg-[#f3f5e8] flex flex-col items-center justify-center px-6 py-12">
     
      <div className="grid grid-cols-4 gap-10 w-full max-w-6xl text-black">
       
        <div className="flex flex-col items-start px-3 gap-6 text-sm">
          <div className="flex items-start gap-2 ">
            <MapPinIcon className="w-5 h-5 mt-2 text-gray-500" />
            <div >
           <p className="gap-2">Sri Sai Tower, No. 994,<br/> 1st Floor&nbsp; main,<br />
            Koramangala 1st Block, Bengaluru
            560034</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-black">
             <EnvelopeIcon className="w-4 h-4 text-gray-500" />
            <span>admin@oxiumev.com</span>
          </div>
          <div className="flex items-center gap-2 text-black ">
             <PhoneIcon className="w-4 h-4 text-gray-500" />
            <span>+91 9778203391</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex  flex-col gap-3">
          <h2 className="text-lg relative font-sm hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[55px]">LINKS</h2>
          <div className="flex flex-col gap-1 text-sm">
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/blogs">Blogs</a>
            <a href="/technologies">Technologies</a>
            <a href="/services">Services</a>
          </div>
        </div>

        {/* Compliance */}
        <div className="flex  flex-col gap-3">
          <h2 className="text-lg relative font-sm hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[122px]">COMPLIANCE</h2>
          <div className="flex flex-col gap-1 text-sm">
            <a href="/terms&conditions">Terms and Conditions</a>
            <a href="/privacypolicy">Privacy Policy</a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex  flex-col gap-3">
          <h2 className="text-lg relative font-sm hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[80px]">SOCIALS</h2>
          <div className="flex flex-col gap-1 text-sm">
            <a href="https://www.linkedin.com/company/oxium-energy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mb-30 mt-30">
        <Image
          src="/footerlogo.png"
          alt="Oxium Footer Preview"
          width={700}
          height={990}
          className="w-full max-w-4xl "
        />
      </div>

      
      <div className=" flex justify-evenly text-xs text-gray-500 mt-10 gap-36">
        <p><a href="https://www.linkedin.com/company/oxium-tech-consultancy/" target="_blank" rel="noopener noreferrer">• OXIUM TECH CONSULTANCY</a></p>
        <p><a href="/rightsreserved">• ALL RIGHTS RESERVED </a></p>
        <p><a href="/privacypolicy">• PRIVACY POLICY </a></p>
        <p><a href="/team">• DESIGNED AND DEVELOPED IN-HOUSE</a></p>
      </div>
    </div>
  );
}
