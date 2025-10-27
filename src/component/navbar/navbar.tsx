"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact-me" },
    { name: "Log in", href: "/login" },
  ];

  return (
    <nav className="font-rethink fixed top-0 left-0 w-full z-50 bg-gray-900 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-500"
        >
          Zeuss<span className="text-gray-800"></span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-indigo-500 underline-animate font-bold transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-6 py-3 text-gray-700 hover:text-indigo-600 underline-animate transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
