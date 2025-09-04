import ApiTester from "../components/dev/ApiTester"
import ApiStatus from "../components/dev/ApiStatus"

export default function DevTools() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">🛠️ Development Tools</h1>
          <p className="text-gray-600 mb-6">
            This page provides tools to test and debug the API integration for the Fixyland hotel booking system.
          </p>

          <div className="grid gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">API Integration Overview</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Integrated Components:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>
                    ✅ <strong>Booking Form</strong> - Creates appointments via POST /api/appointments
                  </li>
                  <li>
                    ✅ <strong>Staff Section</strong> - Fetches staff data via GET /api/staff
                  </li>
                  <li>
                    ✅ <strong>Rooms Section</strong> - Fetches hotel data via GET /api/hotels
                  </li>
                  <li>
                    ✅ <strong>Error Handling</strong> - Graceful fallbacks for all API failures
                  </li>
                  <li>
                    ✅ <strong>Loading States</strong> - Proper loading indicators and skeleton screens
                  </li>
                </ul>
              </div>
            </div>

            <ApiTester />

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">🚀 Getting Started</h3>
              <ol className="text-sm text-yellow-700 space-y-1">
                <li>1. Start your backend server on http://localhost:5000</li>
                <li>2. Ensure your API endpoints match the Postman collection structure</li>
                <li>3. Use the API Tester above to verify connectivity</li>
                <li>4. Navigate to the main pages to see live integration</li>
                <li>5. Check browser console for detailed API logs</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ApiStatus />
    </div>
  )
}
