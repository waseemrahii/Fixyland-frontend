
// import { useState } from "react"
// import { Link, NavLink } from "react-router-dom"
// import { FiSearch, FiX, FiFacebook, FiTwitter, FiInstagram, FiChevronDown } from "react-icons/fi"
// import { FaBehance } from "react-icons/fa"

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Pages", path: "/pages" },
//     { name: "Rooms & Suites", path: "/rooms" },
//     { name: "Services", path: "/services" },
//     { name: "Blog", path: "/blog" },
//     { name: "Contact", path: "/contact" },
//   ]

//   return (
//     <>
//       <div className="bg-emerald-600 text-white text-sm py-2">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center space-x-6">
//             <span>7631 Sabina Park, 115 Devon Isle, USA</span>
//             <span>•</span>
//             <span>info@domain.com</span>
//             <span>•</span>
//             <span>(+1) 987 654 3210</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FiFacebook className="w-4 h-4 hover:text-green-200 cursor-pointer" />
//             <FiTwitter className="w-4 h-4 hover:text-green-200 cursor-pointer" />
//             <FiInstagram className="w-4 h-4 hover:text-green-200 cursor-pointer" />
//             <FaBehance className="w-4 h-4 hover:text-green-200 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       <nav className="sticky top-0 z-50 flex ">
//         {/* Left section - White background with logo */}
// <div className="bg-white px-12 py-2 flex items-center clip-slash-forward">
//           <Link to="/" className="flex items-center">
//             <div className="flex items-center gap-2">
//               <div className="text-emerald-500 text-2xl">
//                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="4" y="8" width="24" height="20" fill="currentColor" opacity="0.2" />
//                   <rect x="6" y="6" width="4" height="4" fill="currentColor" />
//                   <rect x="12" y="6" width="4" height="4" fill="currentColor" />
//                   <rect x="18" y="6" width="4" height="4" fill="currentColor" />
//                   <rect x="24" y="6" width="4" height="4" fill="currentColor" />
//                   <rect x="4" y="10" width="2" height="18" fill="currentColor" />
//                   <rect x="26" y="10" width="2" height="18" fill="currentColor" />
//                   <rect x="8" y="12" width="2" height="3" fill="white" />
//                   <rect x="12" y="12" width="2" height="3" fill="white" />
//                   <rect x="16" y="12" width="2" height="3" fill="white" />
//                   <rect x="20" y="12" width="2" height="3" fill="white" />
//                   <rect x="8" y="17" width="2" height="3" fill="white" />
//                   <rect x="12" y="17" width="2" height="3" fill="white" />
//                   <rect x="16" y="17" width="2" height="3" fill="white" />
//                   <rect x="20" y="17" width="2" height="3" fill="white" />
//                   <rect x="8" y="22" width="2" height="3" fill="white" />
//                   <rect x="12" y="22" width="2" height="3" fill="white" />
//                   <rect x="16" y="22" width="2" height="3" fill="white" />
//                   <rect x="20" y="22" width="2" height="3" fill="white" />
//                 </svg>
//               </div>
//               <span className="text-2xl font-bold text-gray-900">Fixyland</span>
//             </div>
//           </Link>
//         </div>

//         {/* Right section - Dark background with navigation */}
//   <div className="bg-gray-800 text-white flex-1 px-12 py-2 clip-slash-backward">
//           <div className="flex justify-between items-center">
//             <div className="flex-1 flex justify-center">
//               <div className="hidden md:flex space-x-8">
//                 {navLinks.map((link) => (
//                   <NavLink
//                     key={link.name}
//                     to={link.path}
//                     className={({ isActive }) =>
//                       `text-white font-medium hover:text-emerald-400 transition-colors flex items-center gap-1 ${isActive ? "text-emerald-400" : ""}`
//                     }
//                   >
//                     {link.name}
//                     {(link.name === "Home" ||
//                       link.name === "Pages" ||
//                       link.name === "Rooms & Suites" ||
//                       link.name === "Services" ||
//                       link.name === "Blog") && <FiChevronDown className="w-3 h-3" />}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
//                 <FiSearch className="text-lg text-white" />
//               </button>
//               <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
//                 <div className="flex flex-col space-y-1">
//                   <div className="w-4 h-0.5 bg-white"></div>
//                   <div className="w-4 h-0.5 bg-white"></div>
//                   <div className="w-4 h-0.5 bg-white"></div>
//                 </div>
//               </button>
//               <Link
//                 to="/booking"
//                 className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold flex items-center gap-2"
//               >
//                 Book Your Stay
//                 <span>→</span>
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden text-2xl text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? (
//                 <FiX />
//               ) : (
//                 <div className="flex flex-col space-y-1">
//                   <div className="w-6 h-0.5 bg-white"></div>
//                   <div className="w-6 h-0.5 bg-white"></div>
//                   <div className="w-6 h-0.5 bg-white"></div>
//                 </div>
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden flex flex-col space-y-4 pb-4 mt-4">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.name}
//                   to={link.path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `block text-white font-medium hover:text-emerald-400 transition-colors ${
//                       isActive ? "text-emerald-400" : ""
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//               <Link
//                 to="/booking"
//                 className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-semibold text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Book Your Stay
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar


import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FiSearch, FiX, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { FaBehance } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Booking", path: "/booking" },
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-emerald-600 text-white text-xs md:text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Left info */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-6 text-center">
            <span>7631 Sabina Park, 115 Devon Isle, USA</span>
            <span className="hidden md:inline">•</span>
            <span>info@domain.com</span>
            <span className="hidden md:inline">•</span>
            <span>(+1) 987 654 3210</span>
          </div>
          {/* Socials */}
          <div className="flex items-center space-x-3">
            <FiFacebook className="w-4 h-4 hover:text-green-200 cursor-pointer" />
            <FiTwitter className="w-4 h-4 hover:text-green-200 cursor-pointer" />
            <FiInstagram className="w-4 h-4 hover:text-green-200 cursor-pointer" />
            <FaBehance className="w-4 h-4 hover:text-green-200 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 flex flex-wrap">
        {/* Left: Logo */}
        <div className="bg-white px-6 md:px-12 py-2 flex items-center clip-slash-forward w-full md:w-auto justify-between">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="text-emerald-500 text-2xl">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="8" width="24" height="20" fill="currentColor" opacity="0.2" />
                  <rect x="6" y="6" width="4" height="4" fill="currentColor" />
                  <rect x="12" y="6" width="4" height="4" fill="currentColor" />
                  <rect x="18" y="6" width="4" height="4" fill="currentColor" />
                  <rect x="24" y="6" width="4" height="4" fill="currentColor" />
                  <rect x="4" y="10" width="2" height="18" fill="currentColor" />
                  <rect x="26" y="10" width="2" height="18" fill="currentColor" />
                </svg>
                {/* <img src="/abstract-logo-design-3.png" className="w-20 h-10" alt="" /> */}
              </div>
              <span className="text-2xl font-bold text-gray-900">Fixyland</span>
            </div>
          </Link>

          {/* Mobile toggle button */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX />
            ) : (
              <div className="flex flex-col space-y-1">
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </div>
            )}
          </button>
        </div>

        {/* Right: Nav links */}
        <div className="bg-gray-800 text-white flex-1 px-6 md:px-12 py-2 clip-slash-backward">
          <div className="hidden md:flex justify-between items-center">
            {/* Desktop links */}
            <div className="flex-1 flex justify-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white font-medium hover:text-emerald-400 transition-colors ${
                      isActive ? "text-emerald-400" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <FiSearch className="text-lg text-white" />
              </button>
              <Link
                to="/booking"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold flex items-center gap-2"
              >
                Book Your Stay →
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-white font-medium hover:text-emerald-400 transition-colors ${
                      isActive ? "text-emerald-400" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-semibold text-center"
              >
                Book Your Stay
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
