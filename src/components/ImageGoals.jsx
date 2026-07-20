import React from "react";
import Folder from "../components/Folder";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";

const folderData = [
  { id: 1, title: "ភាពសប្បាយរីករាយចេញពីចិត្ត", imgSrc: g1 },
  { id: 2, title: "ការគោរពនិងដឹងពីគោលដៅរបស់ខ្លួន", imgSrc: g2 },
  { id: 3, title: "ភាពរស់រានមានជីវិត", imgSrc: g3 },
  { id: 4, title: "ទំនុកចិត្តនិងភាពអត់ធ្មត់", imgSrc: g4 },
  { id: 5, title: "ការចែករំលែកនិងការអធ្យាស្រ័យ", imgSrc: g5 },
  { id: 6, title: "ហ៊ានធ្វើនិងបង្កាញពីភាពជាម្ចាស់សាមីខ្លួន", imgSrc: g6 },
];

export default function ImageGrids() {
  return (
    <section className="section">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {folderData.map((folder) => (
          <Folder
            key={folder.id}
            title={folder.title}
            imgSrc={folder.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}