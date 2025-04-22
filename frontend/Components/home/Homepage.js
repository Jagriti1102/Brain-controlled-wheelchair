"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import MyCarousel from "../register/MyCarousel";
import AboutCarousel from "./AboutCarousel";
import BookingModal from "./BookingModal";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load username & watch scroll
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth-scroll helper
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-green-50 to-green-200">
        {/* ─── HEADER ─────────────────────────────────── */}
        <header
          className={`
            sticky top-0 w-full z-50 px-12 sm:px-64 py-6 flex justify-between items-center
            bg-gradient-to-r from-green-200 to-green-700 shadow-2xl backdrop-blur-lg transition-colors duration-500
            ${scrolled ? "bg-opacity-30" : "bg-opacity-90"}
          `}
        >
          <div className="flex">
            <img src="./assets/logo.png" className="h-16 w-16" alt="logo" />
            <div className="text-3xl font-extrabold uppercase text-black tracking-widest drop-shadow-md">
              NeuroDrive
            </div>
          </div>

          <nav>
            <ul className="flex gap-x-6">
              {["About", "Our Work", "Contact Us"].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() =>
                      scrollToSection(
                        item === "About"
                          ? "about"
                          : item === "Our Work"
                          ? "work"
                          : "contact"
                      )
                    }
                    className="px-4 py-2 rounded-full text-black font-medium hover:bg-green-100 shadow-md transition"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* ─── MAIN CONTENT ───────────────────────────── */}
        <main className="flex-1 px-12 sm:px-36 mb-16">
          {/* Carousel + Welcome */}
          <section className="flex flex-col lg:flex-row justify-between gap-12 mt-16">
            <div className="rounded-3xl shadow-lg overflow-hidden flex-1">
              <MyCarousel />
            </div>
            <div className="flex-1 flex flex-col justify-center text-green-700 font-light">
              <p className="text-7xl">Welcome</p>
              <p className="text-8xl font-bold mt-2">{username || "Guest"}.</p>
              <p className="mt-4 text-xl">
                We're excited to see you here—let's explore science together!
              </p>
            </div>
          </section>

          {/* Simulation Preview */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
            <div className="h-64 flex items-center justify-center bg-green-100 rounded-4xl p-6">
              <p className="text-2xl text-green-700 text-center">
                Explore our interactive driving simulation showcasing real-time
                collision-avoidance algorithms and sensor fusion techniques.
              </p>
            </div>
            <div className="bg-green-700 p-6 rounded-4xl shadow-lg text-center">
              <p className="text-white text-5xl lg:text-7xl mb-8">
                Try Our Simulation
              </p>
              <button
                onClick={() =>
                  window.open("http://127.0.0.1:5000/simulation", "_blank")
                }
                className="inline-block border-2 border-white border-dashed text-white px-8 py-3 text-2xl rounded hover:bg-green-600 transition"
              >
                Launch Now
              </button>
            </div>
          </section>

          {/* Bookings */}
          <section className="text-center mt-32">
            <p className="text-green-700 text-6xl lg:text-7xl mb-6">
              Make Bookings
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
              Experience next-generation mobility: test-drive our EEG-driven
              wheelchair that responds to your thoughts in real time. Schedule a
              demo to see how NeuroDrive transforms accessibility.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="border-2 border-gray-700 border-dashed text-gray-800 px-8 py-3 text-2xl rounded hover:bg-gray-200 transition"
            >
              Book now
            </button>
          </section>

          {/* About */}
          <section
            id="about"
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32"
          >
            <div className="bg-green-700 p-8 rounded-4xl shadow-lg text-white">
              <h2 className="text-9xl font-bold mb-6">About Us</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our mission is straightforward: to spark curiosity, fuel
                imagination, and demonstrate the joy of science. We break down
                barriers—no fancy kits, no fees, no courses—just hands-on
                experiences that light the spark of discovery.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Founded in 2023 by a team of engineers and educators, NeuroDrive
                has empowered over 10,000 learners worldwide. From
                EEG-controlled interfaces to virtual labs, we’re committed to
                inclusive, cutting-edge STEM outreach.
              </p>
              <p className="text-lg leading-relaxed">
                Join our community of explorers—whether you’re a student,
                teacher, or lifelong learner, we have something to inspire your
                next breakthrough.
              </p>
              <button
                onClick={() => scrollToSection("support")}
                className="inline-block border-2 border-white border-dashed text-white px-6 py-3 mt-10 rounded hover:bg-green-600 transition"
              >
                Support Us
              </button>
            </div>
            <div className="rounded-3xl shadow-lg overflow-hidden">
              <AboutCarousel />
            </div>
          </section>

          {/* Our Work */}
          <section
            id="work"
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32"
          >
            <div className="rounded-3xl shadow-lg overflow-hidden">
              <img
                src="./assets/work.png"
                width={600}
                height={400}
                className="object-cover"
                alt="logo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-green-700 text-9xl font-bold mb-6">
                Our Work
              </h2>
              <p className="text-green-700 text-lg leading-relaxed">
                Dive into our latest innovations: from neural interfaces to
                immersive simulations, we pioneer accessible STEM demos that
                captivate and educate. Explore case studies, success stories,
                and live demos here.
              </p>
              <button
                onClick={() => scrollToSection("workDetails")}
                className="mt-8 border-2 border-gray-700 border-dashed text-gray-800 px-8 py-3 text-2xl rounded hover:bg-gray-200 transition w-fit"
              >
                Learn More
              </button>
            </div>
          </section>

          {/* Creative Contact Section */}
          <section
            id="contact"
            className="mt-32 px-8 py-16 bg-white rounded-4xl shadow-lg"
          >
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Info Panel */}
              <div className="flex flex-col justify-center">
                <h2 className="text-green-700 text-7xl font-bold mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Have questions, feedback, or ideas? Drop us a message and
                  we’ll respond
                  <br />
                  as soon as we can—unless we’re in class or taking exams!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <i className="fa-solid fa-envelope text-green-700 text-2xl" />
                    <a
                      href="mailto:susmegan007@gmail.com"
                      className="text-gray-700 hover:underline"
                    >
                      susmegan007@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fa-solid fa-phone text-green-700 text-2xl" />
                    <a
                      href="tel:+1234567890"
                      className="text-gray-700 hover:underline"
                    >
                      9205449220
                    </a>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>

        {/* ─── FOOTER ───────────────────────────────── */}
        <footer className="py-6 text-center text-gray-500 text-xs">
          © NeuroDrive 2025
        </footer>

        {/* ─── BOOKING MODAL ───────────────────────── */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      </div>
    </>
  );
}
