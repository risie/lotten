"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Bilder() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = useMemo(
    () => [
      "/gallery/1.jpg",
      "/gallery/2.jpg",
      "/gallery/3.jpg",
      "/gallery/4.jpg",
      "/gallery/5.jpg",
      "/gallery/6.jpg",
      "/gallery/7.jpg",
      "/gallery/8.jpg",
      "/gallery/9.jpg",
    ],
    [],
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt=""
            width={400}
            height={400}
            className="cursor-pointer"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="modal modal-open"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-box w-11/12 max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <Image src={selectedImage} alt="" width={600} height={600} />
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedImage(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
