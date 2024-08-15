import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <nav className="space-x-4">
            <Link to="/admin/doctors" className="hover:underline">
              Doctors
            </Link>
            <Link to="/admin/statistics" className="hover:underline">
              Statistics
            </Link>
            <Link to="/admin/settings" className="hover:underline">
              Settings
            </Link>
            <Link to="/logout" className="hover:underline">
              Logout
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Doctor Applications</h2>
            <p className="text-gray-700 mb-4">
              Review and manage doctor applications. Approve or reject new
              doctors applying to the platform.
            </p>
            <Link
              to="/admin/doctors"
              className="text-green-600 font-bold hover:underline"
            >
              View Applications
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <p className="text-gray-700 mb-4">
              View platform usage statistics, including active users, number of
              appointments, and more.
            </p>
            <Link
              to="/admin/statistics"
              className="text-green-600 font-bold hover:underline"
            >
              View Statistics
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p className="text-gray-700 mb-4">
              Manage system settings, including user roles, platform
              preferences, and other configurations.
            </p>
            <Link
              to="/admin/settings"
              className="text-green-600 font-bold hover:underline"
            >
              Manage Settings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
