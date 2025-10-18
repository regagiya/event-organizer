"use client";

import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Music Festival 2025",
    date: "March 15, 2025",
    location: "Jakarta Convention Center",
    image: "/images/music-festival.jpg",
  },
  {
    id: 2,
    title: "Tech Conference Indonesia",
    date: "April 2, 2025",
    location: "Bandung Tech Park",
    image: "/images/tech-conference.jpg",
  },
  {
    id: 3,
    title: "Art & Culture Expo",
    date: "May 10, 2025",
    location: "Surabaya Expo Hall",
    image: "/images/art-expo.jpg",
  },
  {
    id: 4,
    title: "Startup Weekend 2025",
    date: "June 21, 2025",
    location: "Bali Creative Hub",
    image: "/images/startup-weekend.jpg",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 px-5 md:px-20 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold font-serif mb-10 text-indigo-500">
        Upcoming Events ... !
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src="/bussines.jpeg"
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold font-serif text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 font-serif text-sm mb-1">
                📅 {event.date}
              </p>
              <p className="text-gray-600 font-serif text-sm mb-3">
                📍 {event.location}
              </p>
              <button className="mt-2 w-full bg-indigo-600 font-serif text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
