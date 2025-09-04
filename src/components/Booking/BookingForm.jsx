// import { useForm } from "react-hook-form";
// import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

// export default function BookingForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-emerald-600 font-semibold uppercase tracking-wider mb-2">
//             Stay With Us
//           </p>
//           <h2 className="text-3xl font-bold text-gray-900">Make An Appointment</h2>
//         </div>

//         {/* Form + Info Card */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* Form */}
//           <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//             >
//               {/* First Name */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="Ex. first name"
//                   {...register("firstName", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
//                 />
//                 {errors.firstName && (
//                   <p className="text-red-500 text-sm mt-1">First name is required</p>
//                 )}
//               </div>

//               {/* Last Name */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Ex. last name"
//                   {...register("lastName", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
//                 />
//                 {errors.lastName && (
//                   <p className="text-red-500 text-sm mt-1">Last name is required</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Ex. info@domain.com"
//                   {...register("email", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">Email is required</p>
//                 )}
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   placeholder="Ex. (+1) 987 654 3210"
//                   {...register("phone", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">Phone number is required</p>
//                 )}
//               </div>

//               {/* Select Type */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Select Type</label>
//                 <select
//                   {...register("type", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 text-gray-500 focus:ring-2 focus:ring-emerald-500"
//                 >
//                   <option value="">Select Type</option>
//                   <option value="single">Single</option>
//                   <option value="double">Double</option>
//                   <option value="suite">Suite</option>
//                 </select>
//                 {errors.type && (
//                   <p className="text-red-500 text-sm mt-1">Please select a type</p>
//                 )}
//               </div>

//               {/* Select Room */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Select Room</label>
//                 <select
//                   {...register("room", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 text-gray-500 focus:ring-2 focus:ring-emerald-500"
//                 >
//                   <option value="">Select Room</option>
//                   <option value="101">Room 101</option>
//                   <option value="102">Room 102</option>
//                   <option value="103">Room 103</option>
//                 </select>
//                 {errors.room && (
//                   <p className="text-red-500 text-sm mt-1">Please select a room</p>
//                 )}
//               </div>

//               {/* Check In */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Check In</label>
//                 <input
//                   type="date"
//                   {...register("checkIn", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
//                 />
//                 {errors.checkIn && (
//                   <p className="text-red-500 text-sm mt-1">Check-in date is required</p>
//                 )}
//               </div>

//               {/* Check Out */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Check Out</label>
//                 <input
//                   type="date"
//                   {...register("checkOut", { required: true })}
//                   className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
//                 />
//                 {errors.checkOut && (
//                   <p className="text-red-500 text-sm mt-1">Check-out date is required</p>
//                 )}
//               </div>

//               {/* Message */}
//               <div className="md:col-span-2">
//                 <label className="block text-gray-700 font-medium mb-1">Message</label>
//                 <textarea
//                   placeholder="Ex. type message"
//                   {...register("message")}
//                   rows="4"
//                   className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <div className="md:col-span-2">
//                 <button
//                   type="submit"
//                   className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-md transition w-full md:w-auto"
//                 >
//                   Book Appointment <FaArrowRight />
//                 </button>
//               </div>
//             </form>
//           </div>

//            {/* Info Card */}
//          <div className="bg-emerald-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-full max-w-sm mx-auto h-auto self-start">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
//               alt="Room"
//               className="w-full h-40 object-cover rounded-md mb-6"
//             />
//             <h3 className="text-lg font-semibold flex items-center gap-2">
//               <FaPhoneAlt /> (+1) 987 654 3210
//             </h3>
//             <p className="mt-2 text-sm">Mon-Fri: 7:00 am - 9:00 pm</p>
//             <p className="text-sm mb-6">24/7 Service Available</p>
//             <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-medium px-6 py-2 rounded-md flex items-center gap-2 transition">
//               Call Us Now <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useForm } from "react-hook-form"
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa"
import { useState } from "react"
import { appointmentsAPI } from "../../services/api"

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = async (data) => {
    setIsLoading(true)
    setSubmitStatus(null)
    setErrorMessage("")

    try {
      console.log("[v0] Submitting booking data:", data)
      const response = await appointmentsAPI.create(data)
      console.log("[v0] Booking created successfully:", response)

      setSubmitStatus("success")
      reset() // Clear the form on success

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error(" Booking submission failed:", error)
      setSubmitStatus("error")
      setErrorMessage(error.message || "Failed to create booking. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold uppercase tracking-wider mb-2">Stay With Us</p>
          <h2 className="text-3xl font-bold text-gray-900">Make An Appointment</h2>
        </div>

        {/* Success/Error Message Display */}
        {submitStatus && (
          <div
            className={`max-w-4xl mx-auto mb-6 p-4 rounded-lg ${
              submitStatus === "success"
                ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {submitStatus === "success" ? (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Booking submitted successfully! We'll contact you soon.</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Error: {errorMessage}</span>
              </div>
            )}
          </div>
        )}

        {/* Form + Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Ex. first name"
                  {...register("firstName", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">First name is required</p>}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Ex. last name"
                  {...register("lastName", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">Last name is required</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Ex. info@domain.com"
                  {...register("email", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Ex. (+1) 987 654 3210"
                  {...register("phone", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
              </div>

              {/* Select Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Select Type</label>
                <select
                  {...register("type", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 text-gray-500 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                >
                  <option value="">Select Type</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="suite">Suite</option>
                </select>
                {errors.type && <p className="text-red-500 text-sm mt-1">Please select a type</p>}
              </div>

              {/* Select Room */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Select Room</label>
                <select
                  {...register("room", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 text-gray-500 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                >
                  <option value="">Select Room</option>
                  <option value="101">Room 101</option>
                  <option value="102">Room 102</option>
                  <option value="103">Room 103</option>
                </select>
                {errors.room && <p className="text-red-500 text-sm mt-1">Please select a room</p>}
              </div>

              {/* Check In */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Check In</label>
                <input
                  type="date"
                  {...register("checkIn", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                />
                {errors.checkIn && <p className="text-red-500 text-sm mt-1">Check-in date is required</p>}
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Check Out</label>
                <input
                  type="date"
                  {...register("checkOut", { required: true })}
                  className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                />
                {errors.checkOut && <p className="text-red-500 text-sm mt-1">Check-out date is required</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  placeholder="Ex. type message"
                  {...register("message")}
                  rows="4"
                  className="w-full border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-emerald-500"
                  disabled={isLoading}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex items-center justify-center gap-2 font-medium px-6 py-3 rounded-md transition w-full md:w-auto ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Appointment <FaArrowRight />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info Card */}
          <div className="bg-emerald-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-full max-w-sm mx-auto h-auto self-start">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              alt="Room"
              className="w-full h-40 object-cover rounded-md mb-6"
            />
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FaPhoneAlt /> (+1) 987 654 3210
            </h3>
            <p className="mt-2 text-sm">Mon-Fri: 7:00 am - 9:00 pm</p>
            <p className="text-sm mb-6">24/7 Service Available</p>
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-medium px-6 py-2 rounded-md flex items-center gap-2 transition">
              Call Us Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
