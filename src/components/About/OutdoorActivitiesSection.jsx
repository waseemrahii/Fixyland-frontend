import { FaSwimmer, FaBicycle, FaUtensils } from "react-icons/fa";

export default function OutdoorActivitiesSection() {
  return (
    <div className="py-16 px-4 sm:px-6 bg-[#edf4f2]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-emerald-600 bg-white rounded inline-block px-2 py-1 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3">
            Luxury Hotel
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-snug">
            We Provide Outdoor Activities <br className="hidden sm:block" /> To All Visitors
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed max-w-lg text-sm sm:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {/* Swimming Pool */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaSwimmer className="text-gray-900 text-xl sm:text-2xl" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  The Best Swimming Pool
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  It is a long fact that a reader will be distracted
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  Lorem Ipsum is simply dummy of the printing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  There are many variations of Lorem Ipsum
                </li>
              </ul>
            </div>

            {/* Stationary Bike */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaBicycle className="text-gray-900 text-xl sm:text-2xl" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  The Best Stationary Bike
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  It is a long fact that a reader will be distracted
                </li>
              </ul>
            </div>
          </div>

          {/* Button */}
          <button className="bg-emerald-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-emerald-700 transition text-sm sm:text-base">
            Discover More
          </button>
        </div>

        {/* Right Side Images */}
        <div className="relative flex flex-col items-center lg:block">
          {/* Top Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
              alt="Fireplace"
              className="rounded-xl shadow-lg w-full sm:w-[400px] h-[220px] sm:h-[280px] object-cover"
            />
          </div>

          {/* Bottom Image & Overlay */}
          <div className="flex justify-center lg:justify-start relative lg:left-[14%] -mt-10 sm:-mt-16 lg:-mt-[14%] w-full">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant"
              className="rounded-xl shadow-lg w-[250px] sm:w-[300px] h-[180px] sm:h-[240px] object-cover"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-[-40px] sm:bottom-[-50px] lg:static bg-black rounded-xl w-[140px] sm:w-[160px] text-center text-white shadow-lg p-3 sm:pt-[15px] h-[150px] sm:h-[175px] lg:left-[-10%]">
              <FaUtensils className="text-2xl sm:text-3xl mx-auto mb-2" />
              <h3 className="text-sm sm:text-lg font-bold mb-1">Restaurants</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Donec in quis the pellentesque velit. Donec id velit arcu posuere blane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
