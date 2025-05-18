// components/Navbar.jsx
import Image from "next/image";

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
    <nav className="bg-black text-white px-4 sm:px-6 py-5 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
           <a href="/">
          <Image
            src="/oxiumlogo.png"
            alt="logo"
            width={103}
            height={24}
            priority
          />
         </a>
        </div>

        {/* Navigation Menu (hidden on small screens) */}
        <ul className="hidden md:flex ml-14 space-x-8">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative group"
              >
                <span className="transition-colors duration-200">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
