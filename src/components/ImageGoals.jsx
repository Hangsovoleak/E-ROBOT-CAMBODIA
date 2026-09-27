import React from "react";
import ImageFrame from "./ImageFrame";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";

const photos = [
  { id: 1, src: g1, alt: "E-Robot Activity 1" },
  { id: 2, src: g2, alt: "E-Robot Activity 2" },
  { id: 3, src: g3, alt: "E-Robot Activity 3" },
  { id: 4, src: g4, alt: "E-Robot Activity 4" },
  { id: 5, src: g5, alt: "E-Robot Activity 5" },
  { id: 6, src: g6, alt: "E-Robot Activity 6" },
];

export default function ImageGoals() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {photos.map((item) => (
        <ImageFrame key={item.id} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
}