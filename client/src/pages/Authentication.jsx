import React from "react";
import LoginImage from "../assets/login-image.jpg";
import useAuth from "../hooks/useAuth";

const Authentication = () => {
  const {
    isSignUp,
    userType,
    formData,
    setIsSignUp,
    setUserType,
    handleChange,
    handleSubmit,
  } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 p-8">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full overflow-hidden">
        <div className="relative lg:w-1/2 bg-gradient-to-b from-green-400 to-green-600 p-12 flex items-center justify-center">
          <img
            src={LoginImage}
            alt="Healthcare"
            className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
          />
          <div className="relative flex flex-col items-center justify-center text-center text-white p-12 z-10 h-full">
            <div className="backdrop-blur-md bg-white/30 p-8 rounded-3xl shadow-xl">
              <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
                MedMate
              </h1>
              <div className="w-24 h-1 bg-gray-900 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl font-light mb-4 text-gray-800">
                Your Trusted Healthcare Platform
              </p>
              <p className="text-lg italic text-gray-700">
                Empowering health through innovation and care
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 overflow-y-auto">
          <div className="flex justify-center mb-10">
            <div className="bg-gray-200 rounded-full p-1 inline-flex">
              <button
                onClick={() => setIsSignUp(true)}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${
                  isSignUp ? "bg-green-500 text-white" : "text-gray-700"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${
                  !isSignUp ? "bg-green-500 text-white" : "text-gray-700"
                }`}
              >
                Sign In
              </button>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-200 rounded-full p-1 inline-flex">
              <button
                onClick={() => setUserType("PATIENT")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  userType === "PATIENT"
                    ? "bg-green-500 text-white"
                    : "text-gray-700"
                }`}
              >
                Patient
              </button>
              <button
                onClick={() => setUserType("DOCTOR")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  userType === "DOCTOR"
                    ? "bg-green-500 text-white"
                    : "text-gray-700"
                }`}
              >
                Doctor
              </button>
              {!isSignUp && (
                <button
                  onClick={() => setUserType("ADMIN")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    userType === "ADMIN"
                      ? "bg-green-500 text-white"
                      : "text-gray-700"
                  }`}
                >
                  Admin
                </button>
              )}
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:outline-none transition duration-300 text-lg"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:outline-none transition duration-300 text-lg"
                  type="date"
                  placeholder="Date of Birth"
                  required
                />
                <input
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:outline-none transition duration-300 text-lg"
                  type="tel"
                  placeholder="Contact No"
                  required
                />
                {userType === "DOCTOR" && (
                  <input
                    name="medicalRegistrationNumber"
                    value={formData.medicalRegistrationNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:outline-none transition duration-300 text-lg"
                    type="text"
                    placeholder="Medical Registration Number"
                    required
                  />
                )}
              </>
            )}
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:outline-none transition duration-300 text-lg"
              type="email"
              placeholder="Email"
              required
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:outline-none transition duration-300 text-lg"
              type="password"
              placeholder="Password"
              required
            />
            {!isSignUp && userType === "admin" && (
              <input
                name="adminValidationNumber"
                value={formData.adminValidationNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:outline-none transition duration-300 text-lg"
                type="text"
                placeholder="Admin Validation Number"
                required
              />
            )}
            <button
              className="w-full bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition duration-300 text-lg"
              type="submit"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
