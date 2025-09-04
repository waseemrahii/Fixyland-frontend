const API_BASE_URL = "https://fixyland-api.vercel.app/api/v0"

// Generic API request handler
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Handle empty responses (like DELETE operations)
    const contentType = response.headers.get("content-type")
    if (contentType && contentType.includes("application/json")) {
      return await response.json()
    }

    return response
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error)
    throw error
  }
}

// Staff API Services
export const staffAPI = {
  // Get all staff members
  getAll: () => apiRequest("/staff"),

  // Get staff member by ID
  getById: (id) => apiRequest(`/staff/${id}`),

  // Create new staff member
  create: (staffData) =>
    apiRequest("/staff", {
      method: "POST",
      body: JSON.stringify(staffData),
    }),

  // Update staff member
  update: (id, staffData) =>
    apiRequest(`/staff/${id}`, {
      method: "PUT",
      body: JSON.stringify(staffData),
    }),

  // Delete staff member
  delete: (id) =>
    apiRequest(`/staff/${id}`, {
      method: "DELETE",
    }),
}

// Hotels API Services
export const hotelsAPI = {
  // Get all hotels
  getAll: () => apiRequest("/hotels"),

  // Get hotel by ID
  getById: (id) => apiRequest(`/hotels/${id}`),

  // Create new hotel
  create: (hotelData) =>
    apiRequest("/hotels", {
      method: "POST",
      body: JSON.stringify(hotelData),
    }),

  // Update hotel
  update: (id, hotelData) =>
    apiRequest(`/hotels/${id}`, {
      method: "PUT",
      body: JSON.stringify(hotelData),
    }),

  // Delete hotel
  delete: (id) =>
    apiRequest(`/hotels/${id}`, {
      method: "DELETE",
    }),
}

// Appointments API Services
export const appointmentsAPI = {
  // Get all appointments
  getAll: () => apiRequest("/appointments"),

  // Get appointment by ID
  getById: (id) => apiRequest(`/appointments/${id}`),

  // Create new appointment (booking)
  create: (appointmentData) =>
    apiRequest("/appointments", {
      method: "POST",
      body: JSON.stringify(appointmentData),
    }),

  // Update appointment
  update: (id, appointmentData) =>
    apiRequest(`/appointments/${id}`, {
      method: "PUT",
      body: JSON.stringify(appointmentData),
    }),

  // Delete appointment
  delete: (id) =>
    apiRequest(`/appointments/${id}`, {
      method: "DELETE",
    }),
}

// Export all APIs as default
export default {
  staff: staffAPI,
  hotels: hotelsAPI,
  appointments: appointmentsAPI,
}
