import React, { useState, useEffect } from "react";

export default function WatchVideo() {
  const [open, setOpen] = useState(false);

  const videos = [
    { title: "Introduction", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=267" },
    { title: "Key Message", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=324" },
    { title: "Testimonial 1", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=402" },
    { title: "Testimonial 2", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=833" },
    { title: "Testimonial 3", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=844" },
    { title: "Testimonial 4", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=685" },
    { title: "Closing Remarks", url: "https://www.youtube.com/embed/FE0tm4nj1PE?start=507" },
  ];

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="text-center my-16">
      
      {/* Watch Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-transform duration-300"
      >
        🎥 Watch Our Videos
      </button>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-7xl max-h-[90vh] overflow-y-auto p-10 relative shadow-2xl animate-slideUp"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-gray-500 hover:text-black text-3xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
              🎬 Our Video Gallery
            </h2>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Close Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-900 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                ✖ Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}