// components/Navbar.jsx
import Img from "next/image";
export default function Navbar() {
  const menuItems = [
    "About",
    "Team",
    "Blogs",
    "Technologies",
    "Services",
    "Case Studies",
    "News",
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Space */}
        <div className="text-xl font-bold tracking-wide">
          <Img src= "/oxiumlogo.png"
          alt="logo background" 
          width= {103}
           height= {24.24}
           className="relative top-[21.38px] left-[30px]"

          />
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-5">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative group"
              >
                <span className="transition-colors duration-200">
                  {item}
                </span>
                <span
                  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
