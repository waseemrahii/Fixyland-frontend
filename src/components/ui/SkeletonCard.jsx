export default function SkeletonCard({ className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse ${className}`}>
      {/* Image skeleton */}
      <div className="bg-gray-300 h-56 w-full"></div>

      {/* Content skeleton */}
      <div className="p-6">
        <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
        <div className="flex gap-4 mb-4">
          <div className="h-3 bg-gray-300 rounded w-16"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        </div>
        <div className="h-8 bg-gray-300 rounded w-24"></div>
      </div>
    </div>
  )
}
