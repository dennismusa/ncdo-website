import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WatchVideo() {
  const [open, setOpen] = useState(false);

  const videos = [
    { title: "Introduction", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=267" },
    { title: "Key Message", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=324" },
    { title: "Testimonial", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=402" },
    { title: "Testimonial", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=833" },
    { title: "Testimonial", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=844" },
    { title: "Testimonial", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=685" },
    { title: "Closing Remarks", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=507" },
  ];

  return (
    <div className="text-center">
      {/* Watch Video Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition"
      >
        🎥 Watch our videos
      </button>

      {/* Animated Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50 overflow-y-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl w-full max-w-6xl shadow-2xl relative border border-gray-200"
              initial={{ scale: 0.85, opacity: 0, y: -60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 60 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-3xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center tracking-wide">
                🎬 Our Video Gallery
              </h2>

              {/* Grid of videos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="aspect-video overflow-hidden rounded-t-2xl">
                      <iframe
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {video.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Close Button */}
              <div className="text-center mt-10">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transform transition"
                >
                  ✖ Close Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
