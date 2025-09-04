import { useState, useEffect } from "react"

export default function ApiStatus() {
  const [apiStatus, setApiStatus] = useState("checking")
  const [lastChecked, setLastChecked] = useState(null)

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v0/staff", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })

        if (response.ok) {
          setApiStatus("connected")
        } else {
          setApiStatus("error")
        }
      } catch (error) {
        setApiStatus("disconnected")
      }
      setLastChecked(new Date().toLocaleTimeString())
    }

    checkApiStatus()
    const interval = setInterval(checkApiStatus, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = () => {
    switch (apiStatus) {
      case "connected":
        return "bg-green-500"
      case "disconnected":
        return "bg-red-500"
      case "error":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = () => {
    switch (apiStatus) {
      case "connected":
        return "API Connected"
      case "disconnected":
        return "API Disconnected"
      case "error":
        return "API Error"
      default:
        return "Checking API..."
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border p-3 min-w-[200px]">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${getStatusColor()}`}></div>
          <span className="text-sm font-medium">{getStatusText()}</span>
        </div>
        {lastChecked && <p className="text-xs text-gray-500 mt-1">Last checked: {lastChecked}</p>}
        <p className="text-xs text-gray-400 mt-1">localhost:5000</p>
      </div>
    </div>
  )
}
