import { FaUserFriends, FaBed, FaBath, FaArrowRight } from "react-icons/fa"
import { useState, useEffect } from "react"
import { hotelsAPI } from "../../services/api"
import SkeletonCard from "../ui/SkeletonCard"

export default function RoomsSection() {
  const [rooms, setRooms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        console.log("[v0] Fetching rooms data from hotels API...")
        const response = await hotelsAPI.getAll()
        console.log("Hotels data received:", response)

        // Transform hotel data to room format
        const transformedRooms = response.map((hotel, index) => ({
          id: hotel.id || index + 1,
          title: hotel.name || `Room ${index + 1}`,
          price: hotel.pricePerNight ? `$${hotel.pricePerNight} / Night` : "$400 / Night",
          image:
            hotel.image ||
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
          guests: "2 Guests", // Default values since API doesn't provide these
          beds: "2 Beds",
          baths: "1 Bath",
          location: hotel.location,
          rating: hotel.rating,
        }))

        setRooms(transformedRooms)
        setError(null)
      } catch (err) {
        console.error("[v0] Failed to fetch hotels:", err)
        setError(err.message)
        setRooms([
          {
            id: 1,
            title: "Deluxe Rooms",
            price: "$800 / Night",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            guests: "2 Guests",
            beds: "2 Beds",
            baths: "1 Bath",
          },
          {
            id: 2,
            title: "Junior Rooms",
            price: "$400 / Night",
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
            guests: "2 Guests",
            beds: "2 Beds",
            baths: "1 Bath",
          },
          {
            id: 3,
            title: "Family Rooms",
            price: "$600 / Night",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            guests: "2 Guests",
            beds: "2 Beds",
            baths: "1 Bath",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchRooms()
  }, [])

  return (
    <section className="bg-emerald-700 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-emerald-600 text-white px-4 py-1 rounded-full uppercase text-sm font-medium">
            Our Best Rooms
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">Luxury Rooms and Resort</h2>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-8 text-center max-w-2xl mx-auto">
            <p className="text-sm">
              <strong>Note:</strong> Using cached room data. {error}
            </p>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          /* Room Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.title}
                    className="w-full h-56 object-cover"
                    onError={(e) => {
                      e.target.src = "/luxury-hotel-room.png"
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded">
                    {room.price}
                  </span>
                  {room.rating && (
                    <span className="absolute top-3 right-3 bg-yellow-500 text-white text-sm font-semibold px-2 py-1 rounded flex items-center gap-1">
                      ⭐ {room.rating}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{room.title}</h3>
                  {room.location && <p className="text-emerald-600 text-sm mb-3 font-medium">📍 {room.location}</p>}
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <FaUserFriends /> {room.guests}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBed /> {room.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBath /> {room.baths}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">
                    Experience luxury and comfort in our beautifully designed rooms with modern amenities and stunning
                    views.
                  </p>
                  <button className="bg-emerald-600 text-white hover:bg-emerald-700 font-medium px-5 py-2 rounded-md flex items-center gap-2 transition">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && rooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white text-lg">No rooms available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
