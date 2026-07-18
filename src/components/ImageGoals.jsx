import React from "react";
import Folder from "../components/Folder";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";

export default function ImageGrids() {
  const folderData = [
    { id: 1, title: "ភាពសប្បាយរីករាយចេញពីចិត្ត", imgSrc: g1 },
    { id: 2, title: "ការគោរពនិងដឹងពីគោលដៅរបស់ខ្លួន", imgSrc: g2 },
    { id: 3, title: "ភាពរស់រានមានជីវិត", imgSrc: g3 },
    { id: 4, title: "ទំនុកចិត្តនិងភាពអត់ធ្មត់", imgSrc: g4 },
    { id: 5, title: "ការចែករំលែកនិងការអធ្យាស្រ័យ", imgSrc: g5 },
    { id: 6, title: "ហ៊ានធ្វើនិងបង្កាញពីភាពជាម្ចាស់សាមីខ្លួន", imgSrc: g6 },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Optimized Grid System mapping cleanly across all viewport dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {folderData.map((folder) => (
            <Folder
              key={folder.id}
              title={folder.title}
              imgSrc={folder.imgSrc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}