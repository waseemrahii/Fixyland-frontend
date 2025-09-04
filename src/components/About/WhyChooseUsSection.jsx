// // export default function WhyChooseUsSection() {
// //   return (
// //     <div className="py-20 px-4 max-w-7xl mx-auto">
// //       <div className="grid lg:grid-cols-2 gap-16 items-center">
// //         <div>
// //           <p className="text-emerald-500 font-semibold mb-4 text-sm tracking-wider uppercase">OUR SKILLS</p>
// //           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose for us?</h2>
// //           <p className="text-gray-600 mb-10 leading-relaxed">
// //             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
// //             some form, by injected humour, or randomised words which don't look even.
// //           </p>

// //           <div className="space-y-8">
// //             <div>
// //               <div className="flex justify-between items-center mb-3">
// //                 <span className="font-semibold text-gray-800">Services</span>
// //                 <span className="text-emerald-500 font-semibold">95%</span>
// //               </div>
// //               <div className="w-full bg-gray-200 rounded-full h-2">
// //                 <div
// //                   className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
// //                   style={{ width: "95%" }}
// //                 ></div>
// //               </div>
// //             </div>

// //             <div>
// //               <div className="flex justify-between items-center mb-3">
// //                 <span className="font-semibold text-gray-800">Chef Master</span>
// //                 <span className="text-emerald-500 font-semibold">85%</span>
// //               </div>
// //               <div className="w-full bg-gray-200 rounded-full h-2">
// //                 <div
// //                   className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
// //                   style={{ width: "85%" }}
// //                 ></div>
// //               </div>
// //             </div>

// //             <div>
// //               <div className="flex justify-between items-center mb-3">
// //                 <span className="font-semibold text-gray-800">Design</span>
// //                 <span className="text-emerald-500 font-semibold">92%</span>
// //               </div>
// //               <div className="w-full bg-gray-200 rounded-full h-2">
// //                 <div
// //                   className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
// //                   style={{ width: "92%" }}
// //                 ></div>
// //               </div>
// //             </div>

// //             <div>
// //               <div className="flex justify-between items-center mb-3">
// //                 <span className="font-semibold text-gray-800">IT Solution</span>
// //                 <span className="text-emerald-500 font-semibold">98%</span>
// //               </div>
// //               <div className="w-full bg-gray-200 rounded-full h-2">
// //                 <div
// //                   className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
// //                   style={{ width: "98%" }}
// //                 ></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="relative">
// //           <div className="space-y-4">
// //             <div className="relative">
// //               <img
// //                 src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
// //                 alt="Beach Resort with Umbrella"
// //                 className="rounded-2xl shadow-lg w-full h-64 object-cover"
// //               />
// //             </div>
// //             <div className="relative">
// //               <img
// //                 src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
// //                 alt="Tropical Resort Area"
// //                 className="rounded-2xl shadow-lg w-full h-48 object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }




// export default function WhyChooseUsSection() {
//   const skills = [
//     { name: "Services", percent: 95 },
//     { name: "Chef Master", percent: 85 },
//     { name: "Design", percent: 92 },
//     { name: "IT Solution", percent: 98 },
//   ];

//   return (
//     <div className="py-20 px-6 max-w-7xl mx-auto">
//       <div className="grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <div>
//           <p className="text-emerald-500 font-semibold mb-2 text-sm uppercase">
//             Our Skills
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Why Choose us?
//           </h2>
//           <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form, by injected
//             humour, or randomised words which don’t look even.
//           </p>

//           <div className="space-y-6">
//             {skills.map((skill, i) => (
//               <div key={i}>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="font-semibold text-gray-800">
//                     {skill.name}
//                   </span>
//                   <span className="text-emerald-600 font-semibold">
//                     {skill.percent}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-emerald-600 h-2 rounded-full"
//                     style={{ width: `${skill.percent}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Images */}
//         <div className="relative flex justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1000&q=80"
//             alt="Luxury Beach"
//             className="rounded-2xl shadow-lg w-[500px] h-[320px] object-cover"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80"
//             alt="Resort Area"
//             className="absolute -bottom-10 -left-10 rounded-xl shadow-lg w-[250px] h-[180px] object-cover border-4 border-white"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


export default function WhyChooseUsSection() {
  const skills = [
    { name: "Services", percent: 95 },
    { name: "Chef Master", percent: 85 },
    { name: "Design", percent: 92 },
    { name: "IT Solution", percent: 98 },
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-emerald-500 font-semibold mb-2 text-sm uppercase tracking-wide">
            Our Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Why Choose for us?
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even.
          </p>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">
                    {skill.name}
                  </span>
                  <span className="text-emerald-600 font-semibold">
                    {skill.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-[5px]">
                  <div
                    className="bg-emerald-600 h-[5px] rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center items-center h-[50%]">
          {/* Dotted Pattern Behind */}
          <div className="absolute top-0  w-40 h-40 bg-[radial-gradient(circle,_#10b981_1px,_transparent_1px)] [background-size:12px_12px] opacity-30 rounded-full"></div>

          {/* Large Background Image */}
          <img
            src="https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg"
            alt="Luxury Beach"
            className="rounded-2xl shadow-lg w-[500px] h-[480px] object-cover"
          />

          {/* Small Overlapping Image */}
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80"
            alt="Resort Area"
            className="absolute -bottom-6 -left-10 rounded-xl shadow-lg w-[250px] h-[180px] object-cover border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
}
