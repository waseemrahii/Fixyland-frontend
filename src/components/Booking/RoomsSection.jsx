import { FaUserFriends, FaBed, FaBath, FaArrowRight } from "react-icons/fa";

export default function RoomsSection() {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Rooms",
      price: "$800 / Night",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      guests: "2 Guests",
      beds: "2 Beds",
      baths: "1 Bath",
    },
    {
      id: 2,
      title: "Junior Rooms",
      price: "$400 / Night",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      guests: "2 Guests",
      beds: "2 Beds",
      baths: "1 Bath",
    },
    {
      id: 3,
      title: "Family Rooms",
      price: "$600 / Night",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      guests: "2 Guests",
      beds: "2 Beds",
      baths: "1 Bath",
    },
  ];

  return (
    <section className="bg-emerald-700 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-emerald-600 text-white px-4 py-1 rounded-full uppercase text-sm font-medium">
            Our Best Rooms
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">
            Luxury Rooms and Resort
          </h2>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded">
                  {room.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {room.title}
                </h3>
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
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
                <button className="bg-emerald-600 text-white hover:bg-emerald-700 font-medium px-5 py-2 rounded-md flex items-center gap-2 transition">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
