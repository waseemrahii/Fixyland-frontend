// export default function StaffSection() {
//   const staff = [
//     { 
//       name: "Michael Dean", 
//       role: "Executive Chef",
//       image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
//     },
//     { 
//       name: "Arnold Taylor", 
//       role: "Hotel Manager",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
//     },
//     { 
//       name: "Sarah Johnson", 
//       role: "Head Server",
//       image: "/hotel-concierge-portrait.jpg" 
//     },
//     { 
//       name: "Emma Wilson", 
//       role: "Head Concierge",
//       image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
//     },
//   ]

//   return (
//     <div className="py-16 px-4 max-w-7xl mx-auto">
//       <div className="text-center mb-12">
//         <p className="text-green-500 font-semibold mb-2">POPULAR CHEF</p>
//         <h2 className="text-4xl font-bold text-gray-900">Expert Staff Persons</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {staff.map((member, index) => (
//           <div key={index} className="text-center">
//             <div className="relative mb-4">
//               <img
//                 src={member.image || "/placeholder.svg"}
//                 alt={member.name}
//                 className="w-full h-80 object-cover rounded-lg"
//               />
//               <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded">
//                 <span className="text-sm font-semibold">★</span>
//               </div>
//             </div>
//             <h3 className="font-semibold text-lg">{member.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


import { Plus } from "lucide-react";

export default function StaffSection() {
  const staff = [
    { 
      name: "Michael Dean", 
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
    },
    { 
      name: "Arnold Taylor", 
      role: "Hotel Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
    },
    { 
      name: "Sarah Johnson", 
      role: "Head Server",
      image: "/hotel-concierge-portrait.jpg" 
    },
    { 
      name: "Emma Wilson", 
      role: "Head Concierge",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
    },
  ]
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-emerald-500 font-semibold text-sm uppercase tracking-wide mb-2">
          Fixyland Staff
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Expert Staff Persons
        </h2>
      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {staff.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image with Floating Icon */}
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <button className="absolute bottom-4 right-4 bg-emerald-500 w-9 h-9 flex items-center justify-center rounded-full shadow-lg hover:bg-emerald-600 transition">
                <Plus className="text-white w-5 h-5" />
              </button>
            </div>

            {/* Text Content */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 flex items-center justify-center gap-2">
                <span className="w-6 h-[2px] bg-emerald-500"></span>
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
