"use client";
import Image from "next/image";

// Komponen utama (gabungan EventCard + EventGrid)
export default function EventSection() {
  // Data event (bisa diganti dari API)
  const events = [
    {
      title: "Tech Conference Jakarta 2024",
      organizer: "TechEvents Indonesia",
      description:
        "Join the biggest tech conference in Jakarta featuring industry leaders and innovators.",
      date: "15 Des 2024, 09.00",
      location: "Jakarta Convention Center",
      seats: "150 dari 200 kursi tersedia",
      category: "Technology",
      price: "Rp 500.000",
      rating: 4.5,
      image: "public/technology.jpg",
    },
    {
      title: "Music Festival Bandung",
      organizer: "Bandung Music Events",
      description:
        "Experience the best local and international artists in this amazing music festival.",
      date: "20 Des 2024, 18.00",
      location: "Bandung Creative Hub",
      seats: "500 dari 1000 kursi tersedia",
      category: "Music",
      price: "Rp 300.000",
      rating: 4.8,
      image: "public/music.jpeg",
    },
    {
      title: "Startup Networking Meetup",
      organizer: "Startup Community",
      description:
        "Connect with fellow entrepreneurs and investors in this exclusive networking event.",
      date: "10 Des 2024, 19.00",
      location: "Surabaya Co-working Space",
      seats: "80 dari 100 kursi tersedia",
      category: "Business",
      price: "Gratis",
      rating: 4.2,
      image: "public/bussines.jpeg",
    },
  ];

  return (
    <section className="p-6 bg-white min-h-screen">
      <h2 className="text-lg font-bold font-serif text-gray-700 mb-4">
        Menampilkan {events.length} event
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src="/technology.png"
                alt={event.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {event.price}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-l text-gray-600 font-serif font-semibold mb-1">
                {event.title}
              </h3>
              <p className="text-gray-500 font-serif text-sm mb-3">
                {event.organizer}
              </p>
              <p className="text-gray-600 font-serif text-sm mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="text-sm text-gray-600 font-serif space-y-2 mb-3">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
                <p>👥 {event.seats}</p>
              </div>

              <span className="inline-block bg-gray-200 text-gray-700 font-serif text-sm font-medium px-3 py-1 rounded-full mb-4">
                {event.category}
              </span>

              <button className="w-full bg-blue-900 text-white py-2 font-serif rounded-lg hover:bg-blue-800 transition">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
