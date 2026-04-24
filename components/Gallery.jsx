import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faTimes } from "@fortawesome/free-solid-svg-icons";
import img1 from "../src/image/gallery/1.webp"
import img2 from "../src/image/gallery/2.webp"
import img3 from "../src/image/gallery/3.webp"
import img4 from "../src/image/gallery/4.webp"
import img5 from "../src/image/gallery/5.webp"
import img6 from "../src/image/gallery/6.webp"


const images = [
  { src: img1, alt: "Hydro Project 1" },
  { src: img2, alt: "Hydro Project 2" },
  { src: img3, alt: "Hydro Project 3" },
  { src: img4, alt: "Hydro Project 4" },
  { src: img5, alt: "Hydro Project 5" },
  { src: img6, alt: "Hydro Project 6" }
];

const Gallery = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openViewer = (img) => {
    setActiveImage(img);
    setViewerOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeViewer = () => {
    setViewerOpen(false);
    setTimeout(() => {
      setActiveImage(null);
      document.body.classList.remove("no-scroll");
    }, 300); // match your transition
  };

  // ESC key support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeViewer();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="py-24 px-6  transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className=" inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
              Gallery
            </span>
            <h2 className=" text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              <span className="text-blue-500">Pictures</span>
            </h2>
          </div>

          {/* GRID */}
          <div className="teamParent gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className=" cursor-pointer group relative overflow-hidden rounded-[2rem] h-64 shadow-lg transition-all duration-500"
                onClick={() => openViewer(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={faExpand} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE VIEWER MODAL */}
      {viewerOpen && (
        <div
          id="imageViewer"
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 ${
            viewerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => {
            if (e.target.id === "imageViewer") closeViewer();
          }}
        >
          <div className="relative max-w-4xl w-full px-4">
            {/* Close button */}
            <button
              onClick={closeViewer}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <img
              src={activeImage?.src}
              alt={activeImage?.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            <p className="text-white text-center mt-4">
              {activeImage?.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;