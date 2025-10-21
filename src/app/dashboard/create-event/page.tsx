"use client";
import { useState } from "react";

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    type: "",
    theme: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bgcreate.jpg')" }}
      >
        <div className="min-h-screen bg-black/40 p-6 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 p-6 rounded-2xl shadow-lg w-full max-w-md"
          >
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-500 font-serif">
              Create Event
            </h1>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Event Location"
              className="w-full p-3 mb-3 border text-gray-500 font-serif rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 mb-3 border text-gray-500 font-serif rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 mb-3 border text-gray-500 font-serif rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Event Type</option>
              <option value="Music">Music</option>
              <option value="Technology">Technology</option>
              <option value="Workshop">Workshop</option>
            </select>

            <input
              type="text"
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              placeholder="Event Theme"
              className="w-full p-3 mb-3 rounded-lg border text-gray-500 font-serif focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold font-serif p-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit Event
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
