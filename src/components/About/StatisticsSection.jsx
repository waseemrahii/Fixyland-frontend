

// export default function StatisticsSection() {
//   const stats = [
//     { number: "305+", label: "Luxury Rooms" },
//     { number: "650+", label: "Regular Guests" },
//     { number: "80+", label: "Team Member" },
//     { number: "75+", label: "Beaches" },
//   ];

//   return (
//     <div className="bg-emerald-600 py-16">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className={`px-6 ${
//               i !== stats.length - 1 ? "border-r border-emerald-500/70" : ""
//             }`}
//           >
//             {/* Number with outlined style */}
//             <h3
//               className="text-5xl md:text-6xl font-extrabold mb-2 tracking-wide"
//               style={{
//                 WebkitTextStroke: "2px white",
//                 color: "#059669", // same as emerald-600 background
//               }}
//             >
//               {stat.number}
//             </h3>
//             <p className="text-white text-lg">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


export default function StatisticsSection() {
  const stats = [
    { number: "305+", label: "Luxury Rooms" },
    { number: "650+", label: "Regular Guests" },
    { number: "80+", label: "Team Member" },
    { number: "75+", label: "Beaches" },
  ];

  return (
    <div className="bg-emerald-600 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-y-10 sm:gap-y-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`sm:px-6 ${
              i < stats.length - 1 && i % 2 !== 1
                ? "sm:border-r sm:border-emerald-500/70"
                : ""
            }`}
          >
            {/* Number with outlined style */}
            <h3
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 tracking-wide"
              style={{
                WebkitTextStroke: "2px white",
                color: "#059669", // matches emerald-600 background
              }}
            >
              {stat.number}
            </h3>
            <p className="text-white text-base sm:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
