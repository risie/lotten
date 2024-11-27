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
      "/gallery/7.jpg",
      "/gallery/8.jpg",
      "/gallery/9.jpg",
      "/gallery/10.jpg",
      "/gallery/11.jpg",
      "/gallery/12.jpg",
      "/gallery/13.jpg",
      "/gallery/14.jpg",
      "/gallery/15.jpg",
      "/gallery/16.jpg",
      "/gallery/17.jpg",
      "/gallery/18.jpg",
      "/gallery/19.jpg",
      "/gallery/20.jpg",
      "/gallery/21.jpg",
      "/gallery/22.jpg",
      "/gallery/23.jpg",
      "/gallery/24.jpg",
      "/gallery/25.jpg",
      "/gallery/26.jpg",
      "/gallery/27.jpg",
      "/gallery/28.jpg",
      "/gallery/29.jpg",
      "/gallery/30.jpg",
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
