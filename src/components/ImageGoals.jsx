import React from "react";
import Folder from "../components/Folder";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";

const ImageGrids = () => {
  const folderData = [
    {
      id: 1,
      title: "ភាពសប្បាយរីករាយចេញពីចិត្ត",
      imgSrc: g1,
    },
    {
      id: 2,
      title: "ការគោរពនិងដឹងពីគោលដៅរបស់ខ្លួន",
      imgSrc: g2,
    },
    {
      id: 3,
      title: "ភាពរស់រានមានជីវិត",
      imgSrc: g3,
    },
    {
      id: 4,
      title: "ទំនុកចិត្តនិងភាពអត់ធ្មត់",
      imgSrc: g4,
    },
    {
      id: 5,
      title: "ការចែករំលែកនិងការអធ្យាស្រ័យ",
      imgSrc: g5,
    },
    {
      id: 6,
      title: "ហ៊ានធ្វើនិងបង្កាញពីភាពជាម្ចាស់សាមីខ្លួន",
      imgSrc: g6,
    },
  ];

  return (
    <section
      className="
        w-full
        
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        
        py-8
        md:py-12
      "
    >
      {/* =========================
          Main Container
      ========================== */}

      <div className="max-w-6xl mx-auto">
        
        {/* =========================
            Section Header
        ========================== */}

        <div className="text-center mb-10 md:mb-14">
          <p
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              
              font-black
              
              text-[#192048]
              
              leading-tight
            "
          >
          </p>

          <p
            className="
              mt-4
              
              text-sm
              sm:text-base
              
              text-gray-600
              
              max-w-2xl
              mx-auto
              
              leading-relaxed
            "
          >
          </p>
        </div>

        {/* =========================
            Responsive Folder Grid
        ========================== */}

        <div
          className="
            grid
            
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            
            gap-y-6
            sm:gap-y-8
            md:gap-y-10
            
            gap-x-4
            sm:gap-x-5
            md:gap-x-6
          "
        >
          {folderData.map((folder) => (
            <div
              key={folder.id}
              className="
                w-full
                
                transition-transform
                duration-300
                
                hover:-translate-y-1
              "
            >
              <Folder
                title={folder.title}
                imgSrc={folder.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrids;