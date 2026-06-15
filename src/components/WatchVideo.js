import React from "react";
import { useNavigate } from "react-router-dom";

export default function WatchVideo() {
  const navigate = useNavigate();

  const videos = [
    { title: "Introduction", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=267" },
    { title: "Key Message", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=324" },
    { title: "Testimonial 1", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=402" },
    { title: "Testimonial 2", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=833" },
    { title: "Testimonial 3", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=844" },
    { title: "Testimonial 4", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=685" },
    { title: "Closing Remarks", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=507" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2ECE8] to-white">

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#1D347A] font-semibold hover:text-black transition"
          >
            ← Back
          </button>

          {/* Title */}
          <h1 className="text-lg md:text-xl font-bold text-[#1D347A]">
            Video Gallery
          </h1>

          {/* Spacer */}
          <div className="w-10"></div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center px-6 pt-10 pb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D347A]">
          🎬 Our Stories in Motion
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore real community impact stories, testimonials, and highlights
          from our development programs.
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Video */}
            <div className="aspect-video bg-black">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Title */}
            <div className="p-4 text-center">
              <h3 className="text-base md:text-lg font-semibold text-[#1D347A]">
                {video.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}