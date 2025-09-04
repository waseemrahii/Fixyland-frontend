import { Link } from "react-router-dom";

export default function HeroSection({ title }) {
  return (
    <div
      className="relative h-80 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hotel-1.png')", // you can make this a prop too if needed
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="text-white max-w-md">
            {/* Dynamic Title */}
            <h1 className="text-4xl font-bold mb-4">{title}</h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-lg">
              <Link to="/" className="hover:text-green-400 cursor-pointer">
                Home
              </Link>
              <span>›</span>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
