import { Link } from "react-router-dom"
import HeroSection from "../components/About/HeroSection"

export default function NotFound() {
  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
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
          We're sorry but we can't seem to find the page you requested. This might be because you have typed the web
          address incorrectly.
        </p>

        <Link
          to="/"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Back To Home →
        </Link>
      </div>
    </div>
  )
}
