import { Link } from "react-router-dom";
import HeroSection from "../components/about/HeroSection";

export default function NotFound() {
  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      {/* <div className="relative h-60 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold mb-2">404 Error</h1>
          <p className="text-sm">
            <Link to="/" className="hover:text-emerald-400">Home</Link> &nbsp;/&nbsp; Error
          </p>
        </div>
      </div> */}

            <HeroSection title="404" />


      {/* Content Section */}
      <div className="text-center py-16 px-6">
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png"
            alt="404 Illustration"
            className="w-80 h-auto"
          />
        </div>

        <p className="text-2xl font-semibold text-gray-800 mb-4">Ohh! Page Not Found</p>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          We're sorry but we can't seem to find the page you requested.
          This might be because you have typed the web address incorrectly.
        </p>

        <Link
          to="/"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Back To Home →
        </Link>
      </div>
    </div>
  );
}
