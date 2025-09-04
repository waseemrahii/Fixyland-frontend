// import { useState } from "react";
// import { FaPlay, FaTimes } from "react-icons/fa";

// export default function VideoSection() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative bg-emerald-600 py-28 flex items-center justify-center text-center">
//       {/* Overlay video background when open */}
//       {isOpen && (
//         <div className="absolute inset-0 z-20">
//           <video
//             className="w-full h-full object-cover"
//             autoPlay
//             loop
//             muted={false}
//           >
//             <source src="https://player.vimeo.com/external/210174273.sd.mp4?s=8a037bb7b648a84f5e1e53d58e6c52c8d20593d7&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="absolute inset-0 bg-black/40"></div>

//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-6 right-6 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
//           >
//             <FaTimes className="text-xl" />
//           </button>
//         </div>
//       )}

//       {/* Content Layer */}
//       <div className="relative z-30 max-w-3xl px-4">
//         <p className="text-white text-sm font-semibold uppercase tracking-wide mb-4 bg-white/20 px-4 py-1 rounded-full inline-block">
//           Amazing Experience
//         </p>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 leading-snug">
//           Relax And Enjoy With Our
//           <br />
//           Hotel & Resort
//         </h2>

//         {/* Play Button */}
//         {!isOpen && (
//           <button
//             onClick={() => setIsOpen(true)}
//             className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition transform mx-auto"
//           >
//             <FaPlay className="text-emerald-600 text-2xl ml-1" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-emerald-600 py-20 md:py-28 flex items-center justify-center text-center">
      {/* Overlay video background when open */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={false}
          >
            <source
              src="https://player.vimeo.com/external/210174273.sd.mp4?s=8a037bb7b648a84f5e1e53d58e6c52c8d20593d7&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white text-black p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-30 max-w-3xl px-4">
        <p className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3 sm:mb-4 bg-white/20 px-3 sm:px-4 py-1 rounded-full inline-block">
          Amazing Experience
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-8 md:mb-12 leading-snug">
          Relax And Enjoy With Our
          <br className="hidden sm:block" />
          Hotel & Resort
        </h2>

        {/* Play Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition transform mx-auto"
          >
            <FaPlay className="text-emerald-600 text-xl sm:text-2xl ml-1" />
          </button>
        )}
      </div>
    </div>
  );
}
