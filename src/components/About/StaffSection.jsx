import { Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { staffAPI } from "../../services/api"

export default function StaffSection() {
  const [staff, setStaff] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        console.log("[v0] Fetching staff data from API...")
        const response = await staffAPI.getAll()
        console.log("[v0] Staff data received:", response)
        setStaff(response)
        setError(null)
      } catch (err) {
        console.error("[v0] Failed to fetch staff:", err)
        setError(err.message)
        setStaff([
          {
            name: "Michael Dean",
            role: "Executive Chef",
            experience: 8,
            image:
              "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
          },
          {
            name: "Arnold Taylor",
            role: "Hotel Manager",
            experience: 12,
            image:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          },
          {
            name: "Sarah Johnson",
            role: "Head Server",
            experience: 5,
            image: "/hotel-concierge-portrait.jpg",
          },
          {
            name: "Emma Wilson",
            role: "Head Concierge",
            experience: 7,
            image:
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchStaff()
  }, [])

  if (isLoading) {
    return (
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-500 font-semibold text-sm uppercase tracking-wide mb-2">Fixyland Staff</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Expert Staff Persons</h2>
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-emerald-500 font-semibold text-sm uppercase tracking-wide mb-2">Fixyland Staff</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Expert Staff Persons</h2>
      </div>

      {error && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-8 text-center">
          <p className="text-sm">
            <strong>Note:</strong> Using cached staff data. {error}
          </p>
        </div>
      )}

      {/* Staff Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {staff.map((member, index) => (
          <div
            key={member.id || index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image with Floating Icon */}
            <div className="relative">
              <img
                src={member.image || "/placeholder.svg?height=320&width=280&query=staff member"}
                alt={member.name}
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.src = "/staff-member.png"
                }}
              />
              <button className="absolute bottom-4 right-4 bg-emerald-500 w-9 h-9 flex items-center justify-center rounded-full shadow-lg hover:bg-emerald-600 transition">
                <Plus className="text-white w-5 h-5" />
              </button>
            </div>

            {/* Text Content */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500 text-sm mt-1 flex items-center justify-center gap-2">
                <span className="w-6 h-[2px] bg-emerald-500"></span>
                {member.role}
              </p>
              {member.experience && <p className="text-gray-400 text-xs mt-1">{member.experience} years experience</p>}
            </div>
          </div>
        ))}
      </div>

      {staff.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No staff members found.</p>
        </div>
      )}
    </div>
  )
}
