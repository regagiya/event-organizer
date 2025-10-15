"use client";

import { useState } from "react";
import EventSection from "../eventsection/eventsection";

export default function Event() {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bgs.jpg')" }}
      >
        {/*SEARCH EVENT*/}
        <div className="flex flex-col items-center h-full">
          <h1 className=" md:text-3xl font-bold font-serif text-white/80 mt-40">
            Explore the Best Events Around You
          </h1>
          <div className="flex justify-center items-center w-full mt-10">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events in Jakarta, Bandung, Surabaya..."
              className="w-[100%] md:w-[500px] px-4 py-3 border text-gray-400 border-gray-300 rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              onClick={() => alert(`Searching for: ${query}`)}
              className="ml-3 px-5 py-3 bg-indigo-500 text-gray-300 shadow-2xl font-serif rounded-xl hover:bg-indigo-700 transition"
            >
              Search
            </button>
          </div>
          {/*SELECTED CATEGORY*/}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-6xl mx-auto mt-15">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-lg font-semibold font-serif text-gray-800 mb-2">
                  Category
                </label>
                <select className="p-3 border border-gray-300 text-gray-800 mb-2 shadow-2xl rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Select Category</option>
                  <option>Musik</option>
                  <option>Teknologi</option>
                  <option>Olahraga</option>
                  <option>Seni & Budaya</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold font-serif text-gray-800 mb-2">
                  Location
                </label>
                <select className="p-3 border border-gray-300 text-gray-800 mb-2 shadow-2xl rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Select Location</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                  <option>Surabaya</option>
                  <option>Yogyakarta</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold font-serif text-gray-800 mb-2">
                  Price
                </label>
                <select className="p-3 border border-gray-300 text-gray-800 mb-2 shadow-2xl rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Select Price</option>
                  <option>Gratis</option>
                  <option>&lt; Rp50.000</option>
                  <option>Rp50.000 - Rp200.000</option>
                  <option>&gt; Rp200.000</option>
                </select>
              </div>
            </div>
            <EventSection />
          </div>
        </div>
      </div>
    </main>
  );
}
