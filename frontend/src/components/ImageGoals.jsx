import React from 'react';
import Folder from '../components/Folder'; // Assuming Folder is in the same directory
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import g5 from '../assets/g5.png'
import g6 from '../assets/g6.png'

const ImageGrids = () => {
  const folderData = [
    { id: 1, title: "ភាពសប្បាយរីករាយចេញពីចិត្ត", imgSrc: g1 },
    { id: 2, title: "ការគោរពនិងដឹងពីគោលដៅរបស់ខ្លួន", imgSrc: g2 },
    { id: 3, title: "ភាពរស់រានមានជីវិត", imgSrc: g3 },
    { id: 4, title: "ទំនុកចិត្តនិងភាពអត់ធ្មត់", imgSrc: g4 },
    { id: 5, title: "ការចែករំលែកនិងការអធ្យាស្រ័យ", imgSrc: g5 },
    { id: 6, title: "ហ៊ានធ្វើនិងបង្កាញពីភាពជាម្ចាស់សាមីខ្លួន",   imgSrc: g6 },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* 
          grid-cols-1: Mobile (1 column)
          md:grid-cols-3: Tablet/Desktop (3 columns)
          gap-x-6: Horizontal spacing between folders
          gap-y-12: Vertical spacing to account for the absolute positioned tabs
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-6">
        {folderData.map((folder) => (
          <Folder
            key={folder.id} 
            title={folder.title} 
            imgSrc={folder.imgSrc} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrids;