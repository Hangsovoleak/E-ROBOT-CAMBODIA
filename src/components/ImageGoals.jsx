import React from "react";
import Folder from "../components/Folder";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";

const folderData = [
  { 
    id: 1, 
    title: "ភាពសប្បាយរីករាយចេញពីចិត្ត", 
    description: "បង្កើតបរិយាកាសសិក្សាដែលពោរពេញដោយស្នាមញញឹម ក្ដីស្រឡាញ់ និងការលើកទឹកចិត្តដល់សិស្សានុសិស្សគ្រប់រូប។",
    imgSrc: g1 
  },
  { 
    id: 2, 
    title: "ការគោរពនិងដឹងពីគោលដៅរបស់ខ្លួន", 
    description: "ជួយសិស្សានុសិស្សឱ្យស្គាល់តម្លៃខ្លួនឯង ស្វែងរកចំណង់ចំណូលចិត្ត និងកំណត់ទិសដៅជីវិតច្បាស់លាស់។",
    imgSrc: g2 
  },
  { 
    id: 3, 
    title: "ភាពរស់រានមានជីវិត និងការបត់បែន", 
    description: "បណ្តុះជំនាញបត់បែន ការដោះស្រាយបញ្ហាក្នុងជីវិតជាក់ស្តែង និងការរៀបចំខ្លួនសម្រាប់អនាគត។",
    imgSrc: g3 
  },
  { 
    id: 4, 
    title: "ទំនុកចិត្តនិងភាពអត់ធ្មត់", 
    description: "ពង្រឹងភាពក្លាហានក្នុងការបញ្ចេញមតិ ការប្រឈមមុខ និងមិនចុះចាញ់ចំពោះឧបសគ្គក្នុងវិស័យបច្ចេកវិទ្យា។",
    imgSrc: g4 
  },
  { 
    id: 5, 
    title: "ការចែករំលែកនិងការអធ្យាស្រ័យ", 
    description: "បណ្តុះស្មារតីជួយគ្នាក្នុងសហគមន៍ ការធ្វើការជាក្រុម និងការចែករំលែកចំណេះដឹងបន្តដល់អ្នកដទៃ។",
    imgSrc: g5 
  },
  { 
    id: 6, 
    title: "ភាពជាម្ចាស់សាមីខ្លួន", 
    description: "បណ្តុះភាពជាអ្នកដឹកនាំ ហ៊ានគិត ហ៊ានធ្វើ និងមានការទទួលខុសត្រូវលើជោគវាសនាផ្ទាល់ខ្លួន។",
    imgSrc: g6 
  },
];

export default function ImageGoals() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {folderData.map((folder) => (
        <Folder
          key={folder.id}
          title={folder.title}
          description={folder.description}
          imgSrc={folder.imgSrc}
          to="/sharings"
        />
      ))}
    </div>
  );
}