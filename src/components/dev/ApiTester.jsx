"use client"

import { useState } from "react"
import { staffAPI, hotelsAPI, appointmentsAPI } from "../../services/api"

export default function ApiTester() {
  const [testResults, setTestResults] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const runApiTest = async (apiName, apiFunction, testName) => {
    setIsLoading(true)
    try {
      console.log(`[v0] Testing ${testName}...`)
      const startTime = Date.now()
      const result = await apiFunction()
      const endTime = Date.now()

      setTestResults((prev) => ({
        ...prev,
        [testName]: {
          status: "success",
          data: result,
          responseTime: endTime - startTime,
          timestamp: new Date().toLocaleTimeString(),
        },
      }))
      console.log(`[v0] ${testName} successful:`, result)
    } catch (error) {
      setTestResults((prev) => ({
        ...prev,
        [testName]: {
          status: "error",
          error: error.message,
          timestamp: new Date().toLocaleTimeString(),
        },
      }))
      console.error(`[v0] ${testName} failed:`, error)
    }
    setIsLoading(false)
  }

  const testAllApis = async () => {
    await runApiTest("staff", staffAPI.getAll, "Staff API - Get All")
    await runApiTest("hotels", hotelsAPI.getAll, "Hotels API - Get All")
    await runApiTest("appointments", appointmentsAPI.getAll, "Appointments API - Get All")
  }

  const testBookingSubmission = async () => {
    const testBooking = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "1234567890",
      type: "suite",
      room: "101",
      checkIn: "2025-09-10",
      checkOut: "2025-09-12",
      message: "API Integration Test",
    }

    await runApiTest("appointments", () => appointmentsAPI.create(testBooking), "Create Test Booking")
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 m-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">🧪 API Integration Tester</h3>
      <p className="text-sm text-gray-600 mb-4">
        This component helps test the API integration. Make sure your backend server is running on localhost:5000.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={testAllApis}
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Test All GET APIs
        </button>
        <button
          onClick={testBookingSubmission}
          disabled={isLoading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
        >
          Test Booking Creation
        </button>
        <button
          onClick={() => setTestResults({})}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Clear Results
        </button>
      </div>

      {isLoading && (
        <div className="flex items-center gap-2 mb-4">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span className="text-sm text-gray-600">Running API tests...</span>
        </div>
      )}

      <div className="space-y-3">
        {Object.entries(testResults).map(([testName, result]) => (
          <div
            key={testName}
            className={`p-3 rounded border-l-4 ${
              result.status === "success" ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"
            }`}
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-sm">{testName}</h4>
              <span className="text-xs text-gray-500">{result.timestamp}</span>
            </div>

            {result.status === "success" ? (
              <div className="mt-2">
                <p className="text-green-700 text-sm">✅ Success</p>
                {result.responseTime && <p className="text-xs text-gray-600">Response time: {result.responseTime}ms</p>}
                {result.data && (
                  <details className="mt-2">
                    <summary className="text-xs text-gray-600 cursor-pointer">View Response Data</summary>
                    <pre className="text-xs bg-gray-100 p-2 rounded mt-1 overflow-auto max-h-32">
                      {JSON.stringify(result.data, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ) : (
              <div className="mt-2">
                <p className="text-red-700 text-sm">❌ Error: {result.error}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 bg-blue-50 rounded border border-blue-200">
        <h4 className="font-medium text-sm text-blue-800 mb-2">💡 Integration Status</h4>
        <ul className="text-xs text-blue-700 space-y-1">
          <li>• Backend API should be running on http://localhost:5000</li>
          <li>• Staff data will populate the "Expert Staff Persons" section</li>
          <li>• Hotel data will populate the "Luxury Rooms and Resort" section</li>
          <li>• Booking form submissions create appointments via API</li>
          <li>• All components have fallback data if API is unavailable</li>
        </ul>
      </div>
    </div>
  )
}
