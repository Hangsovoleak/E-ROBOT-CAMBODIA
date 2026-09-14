import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  km: {
    // Navigation
    nav: {
      home: "ទំព័រដើម",
      about: "អំពីពួកយើង",
      goals: "គោលដៅ",
      events: "សកម្មភាព",
      sharings: "ការចែករំលែក",
      contact: "ទំនាក់ទំនង",
      donate: "ឧបត្ថម្ភពួកយើង",
      login: "ចូលគណនី",
      logout: "ចាកចេញពីគណនី",
      account: "គណនី",
      close: "បិទ",
    },

    // Contact Modal
    contactModal: {
      title: "ស្កែនភ្ជាប់ទំនាក់ទំនងមកកាន់យើងខ្ញុំផ្ទាល់",
      desc: "សូមប្រើប្រាស់កម្មវិធី Telegram ដើម្បីស្កែនទាក់ទងមកកាន់យើងខ្ញុំ។",
      button: "បើកក្នុងកម្មវិធី Telegram",
    },

    // Donation Modal
    donationModal: {
      title: "ឧបត្ថម្ភដល់ E-ROBOT",
      desc: "សូមស្កែន QR Code ខាងក្រោមដើម្បីឧបត្ថម្ភដល់ក្រុមការងារ E-ROBOT",
      thankYou: "អរគុណសម្រាប់ការគាំទ្រសហគមន៍ E-ROBOT!",
      copied: "បានចម្លងលេខគណនី!",
      accountName: "ឈ្មោះគណនី",
      accountNumber: "លេខគណនី",
    },

    // About Us Page
    aboutUs: {
      badgeTop: "ឧត្តមភាពក្នុងការអប់រំបច្ចេកវិទ្យា",
      heroGoalBtn: "មើលគោលដៅរបស់យើង",
      heroActBtn: "សកម្មភាពរបស់យើង",
      heroMission: "ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។ យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន និងនវានុវត្តន៍។",

      badge1: "តើពួកយើងជានរណា?",
      title1: "ស្វែងយល់អំពីពួកយើង",
      desc1: "ពួកយើងធ្វើអ្វីដែលសិស្សានុសិស្សគួរដឹង គួររៀន និងគួរស្វែងយល់។ យើងគឺជាក្រុមការងារដែលអាចផ្លាស់ប្តូរជីវិត និងជួយឱ្យពួកគេរីកចម្រើនតាមរយៈទេពកោសល្យរៀងៗខ្លួនក្នុងវិស័យបច្ចេកវិទ្យា។",
      
      stats: {
        students: "សិស្សានុសិស្សបានចូលរួម",
        missions: "បេសកកម្មសិក្សា",
        provinces: "ខេត្ត-ក្រុងទូទាំងកម្ពុជា",
        commitment: "ការប្តេជ្ញាចិត្តដើម្បីសង្គម",
      },

      cardList: [
        { title: "បេសកកម្ម", desc: "ការលើកកម្ពស់ការអប់រំបច្ចេកវិទ្យានៅតាមបណ្តាខេត្ត និងសហគមន៍ដាច់ស្រយាលក្នុងប្រទេសកម្ពុជា។" },
        { title: "ចក្ខុវិស័យ", desc: "បង្កើតសហគមន៍យុវជនបច្ចេកវិទ្យាដ៏រឹងមាំ និងមានសមត្ថភាពច្នៃប្រឌិតខ្ពស់សម្រាប់អនាគត។" },
        { title: "តម្លៃស្នូល", desc: "ការចែករំលែក ភាពច្នៃប្រឌិត និងការទទួលខុសត្រូវខ្ពស់ចំពោះការអភិវឌ្ឍសង្គមជាតិ។" },
      ],

      badge2: "វិធីសាស្ត្រសិក្សា",
      title2: "តើអ្នកអាចស្គាល់ពួកយើងតាមរបៀបណា?",
      desc2: "E-ROBOT គឺជាអ្នកត្រួសត្រាយផ្លូវនៃវិថីអប់រំថ្មីក្នុងវិស័យបច្ចេកវិទ្យា និងសហគ្រិនភាព ដែលតភ្ជាប់សិស្សានុសិស្សទៅកាន់សក្តានុពលដ៏ល្អបំផុតសម្រាប់ថ្ងៃអនាគតរបស់ពួកគេ។",
      
      steps: [
        { title: "ការកសាងមូលដ្ឋានគ្រឹះ", desc: "គោលការណ៍បច្ចេកវិទ្យាសំខាន់ៗ និងចំណេះដឹងឌីជីថលទូទៅ។" },
        { title: "ការអភិវឌ្ឍជំនាញ", desc: "ការរៀនតាមរយៈការអនុវត្តផ្ទាល់លើការសរសេរកម្មវិធី និងការធ្វើគម្រោងជាក់ស្តែង។" },
        { title: "នវានុវត្តន៍ និងសហគ្រិនភាព", desc: "ការបណ្តុះការគិតបែបច្នៃប្រឌិត និងការអភិវឌ្ឍជំនាញធុរកិច្ចឌីជីថល។" },
      ],

      whyTitle: "ហេតុអ្វីត្រូវជ្រើសរើស E-ROBOT?",
      whyCards: [
        { title: "ការអប់រំឥតគិតថ្លៃ", desc: "ផ្តល់ឱកាសរៀនសូត្រស្មើៗគ្នាដល់សិស្សានុសិស្សនៅតាមបណ្តាខេត្តដោយមិនគិតថ្លៃ។" },
        { title: "ការរៀនតាមអនុវត្ត", desc: "ផ្តោតលើការអនុវត្តផ្ទាល់ជាមួយឧបករណ៍រ៉ូបូត និងការសរសេរកូដជាក់ស្តែង។" },
        { title: "ការបង្កើតបណ្តាញ", desc: "ភ្ជាប់ទំនាក់ទំនងជាមួយសហគមន៍យុវជនដែលមានចំណង់ចំណូលចិត្តដូចគ្នា។" },
      ],

      folderTitle: "ការចងចាំរបស់អ្នកស្ម័គ្រចិត្ត និងដំណើរការចុះបេសកកម្មសិក្សា",
      folderReadMore: "មើលព័ត៌មានបន្ថែម",
      noImage: "មិនមានរូបភាព",
    },

    // Goals Page
    goals: {
      badge1: "ទិសដៅយុទ្ធសាស្ត្រ",
      title1: "គោលដៅរបស់ E-ROBOT",
      desc1: "យើងប្ដេជ្ញាចិត្តខ្ពស់ក្នុងការជម្រុញការយល់ដឹង បណ្តុះបណ្តាលចំណេះដឹង និងបង្កើតឱកាសថ្មីៗនៅក្នុងវិស័យបច្ចេកវិទ្យាជូនដល់យុវជនជំនាន់ក្រោយនៅកម្ពុជា។",
      goalLabel: "គោលដៅទី",

      items: [
        { id: 1, title: "ផ្តល់ឱកាសឱ្យកុមារកម្ពុជាបានសិក្សា និងស្វែងយល់កាន់តែស៊ីជម្រៅអំពីបច្ចេកវិទ្យា" },
        { id: 2, title: "ជួយឱ្យសិស្សានុសិស្សមានលទ្ធភាពស្វែងរកចំណង់ចំណូលចិត្តពិតប្រាកដរបស់ខ្លួន" },
        { id: 3, title: "កាត់បន្ថយគម្លាតចំណេះដឹងផ្នែកបច្ចេកវិទ្យារវាងសិស្សនៅតាមខេត្ត និងសិស្សនៅទីក្រុង" },
        { id: 4, title: "បណ្តុះស្មារតីស្រឡាញ់ការសិក្សា និងការរុករកថ្មីៗក្នុងវិស័យបច្ចេកវិទ្យា" },
      ],

      gridCards: [
        { desc: "សិក្សាឥតគិតថ្លៃ តាមរយៈអនឡាញ Google Meet" },
        { desc: "ទទួលបានសម្ភារ៖ សិក្សាពីសប្បុរសជន" },
        { desc: "ទទួលបានការបណ្តុះបណ្តាលពីយុវជន ស្ម័គ្រចិត្តដែលមានជំនាញ" },
      ],

      bannerBadge: "ការច្នៃប្រឌិត & ការអភិវឌ្ឍ",
      bannerTitle: "រួមគ្នាបង្កើតអនាគតឌីជីថលដ៏ភ្លឺស្វាងសម្រាប់កុមារគ្រប់រូប",

      badge2: "តម្លៃ និងការប្តេជ្ញាចិត្ត",
      title2: "ចក្ខុវិស័យរបស់ E-ROBOT",
    },

    // Events Page
    events: {
      badge: "សេវាកម្ម & បេសកកម្ម",
      title: "សកម្មភាព និងការបណ្តុះបណ្តាលរបស់ E-ROBOT",
      desc: "យើងផ្តល់ជូននូវវគ្គបណ្តុះបណ្តាលបច្ចេកវិទ្យាឥតគិតថ្លៃ សិក្ខាសាលាតម្រង់ទិស និងសកម្មភាពចុះបេសកកម្មអប់រំនៅតាមបណ្តាខេត្ត។",

      pillars: [
        { title: "Robotics & Arduino", desc: "បង្រៀនបង្កើត និងបញ្ជា Robot ជាមួយគ្រឿងអេឡិចត្រូនិក Arduino ដល់សិស្សានុសិស្ស។" },
        { title: "Coding (Scratch)", desc: "បណ្ដុះបណ្ដាលការសរសេរកម្មវិធីកម្រិតដំបូងតាមបែប Logic និងភាពច្នៃប្រឌិត។" },
        { title: "Canva & Design", desc: "បង្រៀនជំនាញរៀបចំរូបភាព មាតិកា និងការបង្កើតស្នាដៃឌីជីថលបែបទំនើប focus លើ Canva។" },
        { title: "STEM & Charity", desc: "រៀបចំសិក្ខាសាលាតម្រង់ទិស និងកម្មវិធីសប្បុរសធម៌នៅតាមសាលារៀនក្នុងខេត្ត។" },
      ],

      missionTitle: "បេសកកម្មអប់រំដែលបានសម្រេច",
      actLabel: "សកម្មភាពទី",
      readMore: "អានបន្ថែម",

      activities: [
        {
          title: "សាលាវិទ្យាល័យសោមធំ (ខេត្តរតនគិរី)",
          location: "ខេត្តរតនគិរី",
          year: "២០២២ - ២០២៤",
          students: "៣០០+ នាក់",
          tags: ["Robotics", "Scratch", "Canva"],
          description: "យើងរៀបចំសហការជាមួយសាលាជាច្រើនគម្រោង ក្នុងនោះមានទាំងគម្រោង ESTEM, One School One Robot និងពន្លកគំនិត។ ក្នុងនោះ យើងបានសហការជាមួយអង្គការតម្លាភាពកម្ពុជា, អង្គការ STEM Cambodia ស្ថានទូតប្រទេសអង់គ្លេស, ការបរិច្ចាគពីសប្បុរសជន ក៏ដូចជាការសហការពីខាងសាលាផ្ទាល់។ យើងមានបណ្ដុះបណ្ដាលលើ Robotics (Arduino), Canva, Scratch និងធ្វើកម្មវិធីសប្បុរសធម៌ផងដែរសម្រាប់បឋមសិក្សាសំ និងបឋមសិក្សាភូមិប៉ាដល​នៃស្រុកអូរយ៉ាដាវ ខេត្តរតនគិរី។",
        },
        {
          title: "អង្គការឆ័ត្របៃតង",
          location: "ស្រុកបាទី ខេត្តតាកែវ",
          year: "២០២២ - ២០២៤",
          students: "៤០+ នាក់/វគ្គ",
          tags: ["Arduino", "Scratch", "Office 365"],
          description: "យើងបានរៀបចំគម្រោងជាច្រើនជាមួយគ្នា សម្រាប់កុមារនៅស្រុកបាទី ខេត្តតាកែវ ក្រោមគម្រោងរបស់អង្គការផ្ទាល់។ យើងសម្រេចបាននូវវគ្គសិក្សា Robotics (Arduino), Canva, Scratch, Office 365 និងកម្មវិធី Typing ជាដើម។",
        },
        {
          title: "វិទ្យាល័យ អារញ្ញសាគរ និង បឋមសិក្សា ព្រៃដង្ហើម",
          location: "ខេត្តសៀមរាប",
          year: "២០២៣ - ២០២៤",
          students: "១០០+ នាក់",
          tags: ["Online Scratch", "សិក្ខាសាលា"],
          description: "យើងបានរៀបចំសិក្ខាសាលាតម្រង់ទិស រយៈពេល ២ ថ្ងៃ ហើយយើងក៏បន្តសហការរៀបចំកម្មវិធីបង្រៀនតាមប្រព័ន្ធ Online លើជំនាញ Scratch ដល់សិក្សានុសិស្សនៅទីនោះដូចគ្នា។",
        },
        {
          title: "សាលាចំណេះដឹងទូទៅបុរីវិជ្ជា",
          location: "ក្រុងកំពង់ឆ្នាំង",
          year: "២០២២ - ២០២៣",
          students: "១៥០+ នាក់",
          tags: ["Robotics Display", "Canva"],
          description: "យើងបានរៀបចំវគ្គសិក្សាជាច្រើន ជាមួយសាលាចំណេះដឹងទូទៅបុរីវិជ្ជា នៅក្នុងក្រុងកំពង់ឆ្នាំង។ ក្នុងនោះមានទាំងការតាំងបង្ហាញស្នាដៃ និងការចែករំលែកបន្តពីសិស្សនៅទីនោះ។",
        },
        {
          title: "វិទ្យាល័យសម្ដេចឪ, វិទ្យាល័យសម្ដេចហ៊ុនសែនកោះដាច់, វិទ្យាល័យផ្កាំ",
          location: "រាជធានីភ្នំពេញ & ខេត្តនានា",
          year: "២០២២ - ២០២៣",
          students: "៥០០+ នាក់",
          tags: ["Robotics", "STEM Campaign"],
          description: "យើងបានរៀបចំគម្រោង Robotics, Scratch, Canva ដាច់ដោយឡែកពីគ្នា ក្រោមជំនួយផ្សេងៗគ្នាពីស្ថាប័នជាច្រើន។ សិស្សសរុបអាចមានដល់ ៥០០ នាក់។",
        },
        {
          title: "សាលាដូង (ភ្នំគិរីរម្យ) & សាលាបឋមសិក្សាត្រពាំងល្អក់",
          location: "ខេត្តកំពង់ស្ពឺ",
          year: "២០២៣ - ២០២៤",
          students: "១៥០+ នាក់",
          tags: ["សប្បុរសធម៌", "ពន្លកគំនិត"],
          description: "យើងបានសហការជាមួយសាលាទាំងនេះ ដើម្បីធ្វើកម្មវិធីសប្បុរសធម៌ និងកម្មវិធីពន្លកគំនិត ដែលមានសិស្សចូលរួមប្រហែលជា ១៥០ នាក់សរុប ក្រោមគម្រោងជំនួយរបស់អង្គការតម្លាភាពកម្ពុជា។",
        }
      ]
    },

    // Sharings Page
    sharings: {
      badge: "បណ្ណាល័យចែករំលែក",
      title: "មាតិការចែករំលែកចំណេះដឹង",
      readOnFb: "ចុចដើម្បីអានលើ Facebook",
      categories: {
        all: "ទាំងអស់",
        mission: "បេសកកម្ម",
        knowledge: "ចំណេះដឹង",
        news: "ព័ត៌មាន",
      },
      cards: [
        { id: 1, title: "Mission in Battambang - ដំណើរចុះបេសកកម្មអប់រំបច្ចេកវិទ្យានៅបាត់ដំបង", category: "បេសកកម្ម" },
        { id: 2, title: "Mission in Takeo - វគ្គបណ្តុះបណ្តាល និងចែករំលែកនៅខេត្តតាកែវ", category: "បេសកកម្ម" },
        { id: 3, title: "Mission in Ratanakiri - ការពង្រីកចំណេះដឹងឌីជីថលដល់តំបន់ដាច់ស្រយាល", category: "បេសកកម្ម" },
        { id: 4, title: "Solar System Knowledge - ស្វែងយល់អំពីប្រព័ន្ធព្រះអាទិត្យ", category: "ចំណេះដឹង" },
        { id: 5, title: "What is SDGs? - គោលដៅអភិវឌ្ឍន៍ប្រកបដោយចីរភាព", category: "ចំណេះដឹង" },
        { id: 6, title: "E-Robot Update News - បច្ចុប្បន្នភាព និងព័ត៌មានថ្មីៗពី E-ROBOT", category: "ព័ត៌មាន" },
      ]
    },

    // Subscribe Component
    subscribe: {
      title: "តាមដានព័ត៌មានថ្មីៗជាមួយយើង",
      desc: "ចូលរួមជាមួយសហគមន៍ E-ROBOT ដើម្បីស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ និងទទួលបានចំណេះដឹងបន្ថែម។",
      placeholder: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
      button: "ចុះឈ្មោះ",
      submitting: "កំពុងផ្ញើ...",
      success: "អរគុណសម្រាប់ការជាវព័ត៌មានប្រចាំខែរបស់ E-ROBOT!",
      error: "មានបញ្ហាកើតឡើង! សូមព្យាយាមម្តងទៀត",
    },

    // Footer
    footer: {
      tagline: "ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។ យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន និងនវានុវត្តន៍។",
      quickLinks: "ព័ត៌មានទូទៅ",
      programs: "កម្មវិធី & វគ្គសិក្សា",
      contact: "ទំនាក់ទំនង",
      location: "ភ្នំពេញ, កម្ពុជា",
    },

    // Auth Form & Modals
    auth: {
      loginTitle: "ចូលប្រើប្រាស់គណនី",
      signUpTitle: "បង្កើតគណនីថ្មី",
      googleSignIn: "ចូលតាមរយៈ Google",
      googleSignUp: "ចុះឈ្មោះតាម Google",
      orEmailLogin: "ឬចូលតាមអ៊ីមែល",
      orEmailSignUp: "ឬចុះឈ្មោះតាមអ៊ីមែល",
      loginSub: "សូមស្វាគមន៍មកកាន់សហគមន៍ E-ROBOT",
      signUpSub: "ចូលរួមជាមួយពួកយើងដើម្បីទទួលបានឱកាសថ្មីៗ",
      modalLoginTitle: "ចូលប្រើប្រាស់ E-ROBOT",
      modalSignUpTitle: "បង្កើតគណនី E-ROBOT",
      modalLoginSub: "សូមបញ្ចូលព័ត៌មានគណនីរបស់អ្នកដើម្បីចូលប្រើ",
      modalSignUpSub: "បំពេញព័ត៌មានខាងក្រោមដើម្បីចុះឈ្មោះគណនីថ្មី",
      googleText: "បន្តជាមួយ Google",
      or: "ឬ",
      fullName: "ឈ្មោះពេញ",
      email: "អ៊ីមែល",
      password: "លេខសម្ងាត់",
      confirmPassword: "ផ្ទៀងផ្ទាត់លេខសម្ងាត់",
      noAccount: "មិនទាន់មានគណនី?",
      hasAccount: "មានគណនីរួចហើយ?",
      signUpHere: "ចុះឈ្មោះនៅទីនេះ",
      loginHere: "ចូលប្រើប្រាស់",
      submitting: "កំពុងដំណើរការ...",
      successLogin: "ចូលប្រើប្រាស់ជោគជ័យ!",
      successSignUp: "បង្កើតគណនីជោគជ័យ!",
    }
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      goals: "Goals",
      events: "Activities",
      sharings: "Resources",
      contact: "Contact",
      donate: "Donate Us",
      login: "Sign In",
      logout: "Sign Out",
      account: "Account",
      close: "Close",
    },

    // Contact Modal
    contactModal: {
      title: "Scan to Connect Directly with Us",
      desc: "Please use the Telegram app to scan and get in touch with our team.",
      button: "Open in Telegram App",
    },

    // Donation Modal
    donationModal: {
      title: "Donate to E-ROBOT",
      desc: "Please scan the QR Code below to support the E-ROBOT team",
      thankYou: "Thank you for supporting the E-ROBOT community!",
      copied: "Account number copied!",
      accountName: "Account Name",
      accountNumber: "Account Number",
    },

    // About Us Page
    aboutUs: {
      badgeTop: "Excellence in Tech Education",
      heroGoalBtn: "Explore Our Goals",
      heroActBtn: "Our Activities",
      heroMission: "Engaging in social development shapes the future for generations to come. We believe education is the key path to creating a thriving and innovative society.",

      badge1: "WHO ARE WE?",
      title1: "Learn About Us",
      desc1: "We create what students should know, learn, and explore. We are a dedicated team transforming lives and empowering youth through their unique talents in technology.",
      
      stats: {
        students: "Students Participated",
        missions: "Educational Missions",
        provinces: "Provinces Across Cambodia",
        commitment: "Commitment to Society",
      },

      cardList: [
        { title: "Mission", desc: "Promoting technology education across provinces and remote communities in Cambodia." },
        { title: "Vision", desc: "Building a strong youth technology community empowered with innovation for the future." },
        { title: "Core Values", desc: "Sharing, creativity, and high responsibility toward national social development." },
      ],

      badge2: "LEARNING METHODOLOGY",
      title2: "How Can You Get to Know Us?",
      desc2: "E-ROBOT is a pioneer in a new educational journey in technology and entrepreneurship, connecting students to their best potential for the future.",
      
      steps: [
        { title: "Building Foundations", desc: "Essential tech principles and general digital literacy." },
        { title: "Skill Development", desc: "Hands-on learning through coding practice and real projects." },
        { title: "Innovation & Entrepreneurship", desc: "Fostering creative thinking and digital business skills." },
      ],

      whyTitle: "Why Choose E-ROBOT?",
      whyCards: [
        { title: "Free Education", desc: "Providing equal learning opportunities to students across provinces free of charge." },
        { title: "Hands-on Learning", desc: "Focusing on practical experience with robotics kits and actual coding." },
        { title: "Network Building", desc: "Connecting with a vibrant community of like-minded technology enthusiasts." },
      ],

      folderTitle: "Volunteer Memories & Educational Outreach Journey",
      folderReadMore: "Read More",
      noImage: "No Image Available",
    },

    // Goals Page
    goals: {
      badge1: "STRATEGIC GOALS",
      title1: "E-ROBOT Goals",
      desc1: "We are deeply committed to inspiring awareness, cultivating knowledge, and creating new opportunities in technology for the next generation in Cambodia.",
      goalLabel: "Goal #",

      items: [
        { id: 1, title: "Empowering Cambodian children to learn and explore technology deeply" },
        { id: 2, title: "Helping students discover their true passion and core talents" },
        { id: 3, title: "Bridging the digital divide between rural and urban students" },
        { id: 4, title: "Fostering a passion for lifelong learning and tech innovation" },
      ],

      gridCards: [
        { desc: "Free online learning via Google Meet platform" },
        { desc: "Receive educational kits donated by generous benefactors" },
        { desc: "Receive hands-on training from skilled youth volunteers" },
      ],

      bannerBadge: "INNOVATION & DEVELOPMENT",
      bannerTitle: "Together Creating a Bright Digital Future for Every Child",

      badge2: "VALUES & COMMITMENT",
      title2: "E-ROBOT Vision",
    },

    // Events Page
    events: {
      badge: "SERVICES & MISSIONS",
      title: "E-ROBOT Activities and Training Programs",
      desc: "We offer free technology workshops, orientation seminars, and educational outreach missions across provinces.",

      pillars: [
        { title: "Robotics & Arduino", desc: "Teaching robotics creation and microcontroller programming with Arduino." },
        { title: "Coding (Scratch)", desc: "Cultivating beginner computer programming through logic and creativity." },
        { title: "Canva & Design", desc: "Teaching graphics, content layout, and modern digital asset creation." },
        { title: "STEM & Charity", desc: "Organizing orientation workshops and charity outreach across rural schools." },
      ],

      missionTitle: "Completed Educational Missions",
      actLabel: "Activity #",
      readMore: "Read More",

      activities: [
        {
          title: "Som Thom High School (Ratanakiri Province)",
          location: "Ratanakiri Province",
          year: "2022 - 2024",
          students: "300+ Students",
          tags: ["Robotics", "Scratch", "Canva"],
          description: "We collaborated on multiple projects including ESTEM, One School One Robot, and Seed Ideas. In partnership with Transparency International Cambodia, STEM Cambodia, the British Embassy, donor gifts, and local school support, we trained students in Robotics (Arduino), Canva, Scratch, and organized charity drives for Som & O'Yadav primary schools.",
        },
        {
          title: "Green Umbrella Organization",
          location: "Bati District, Takeo Province",
          year: "2022 - 2024",
          students: "40+ Students/Session",
          tags: ["Arduino", "Scratch", "Office 365"],
          description: "We conducted multiple joint outreach programs for children in Bati District, Takeo Province under Green Umbrella's initiatives. Courses included Robotics (Arduino), Canva, Scratch, Office 365, and Touch Typing.",
        },
        {
          title: "Aranh Sakor High School & Prey Danghoem Primary School",
          location: "Siem Reap Province",
          year: "2023 - 2024",
          students: "100+ Students",
          tags: ["Online Scratch", "Workshops"],
          description: "We held a 2-day orientation seminar and established an ongoing online learning program for Scratch programming for students in Siem Reap.",
        },
        {
          title: "Borey Vichea General Knowledge School",
          location: "Kampong Chhnang City",
          year: "2022 - 2023",
          students: "150+ Students",
          tags: ["Robotics Display", "Canva"],
          description: "We delivered diverse courses at Borey Vichea School in Kampong Chhnang, featuring robotics project exhibitions and student peer-sharing sessions.",
        },
        {
          title: "Samdach Ov, Samdach Hun Sen Koh Dach, & Phkam High Schools",
          location: "Phnom Penh & Various Provinces",
          year: "2022 - 2023",
          students: "500+ Students",
          tags: ["Robotics", "STEM Campaign"],
          description: "We executed dedicated Robotics, Scratch, and Canva training programs sponsored by diverse institutions, impacting over 500 students.",
        },
        {
          title: "Coconut School (Kirirom) & Trapeang Lveak Primary School",
          location: "Kampong Speu Province",
          year: "2023 - 2024",
          students: "150+ Students",
          tags: ["Charity", "Seed Ideas"],
          description: "We partnered with Coconut School and Trapeang Lveak Primary School for community charity events and STEM mindset workshops with over 150 students funded by TI Cambodia.",
        }
      ]
    },

    // Sharings Page
    sharings: {
      badge: "KNOWLEDGE LIBRARY",
      title: "E-ROBOT Knowledge Sharing Content",
      readOnFb: "Click to read on Facebook",
      categories: {
        all: "All",
        mission: "Missions",
        knowledge: "Knowledge",
        news: "News",
      },
      cards: [
        { id: 1, title: "Mission in Battambang - Technology Educational Outreach Mission", category: "Missions" },
        { id: 2, title: "Mission in Takeo - Training & Knowledge Sharing in Takeo Province", category: "Missions" },
        { id: 3, title: "Mission in Ratanakiri - Expanding Digital Literacy in Remote Areas", category: "Missions" },
        { id: 4, title: "Solar System Knowledge - Explore the Mysteries of the Solar System", category: "Knowledge" },
        { id: 5, title: "What is SDGs? - Understanding Sustainable Development Goals", category: "Knowledge" },
        { id: 6, title: "E-Robot Update News - Latest News & Community Highlights from E-ROBOT", category: "News" },
      ]
    },

    // Subscribe Component
    subscribe: {
      title: "Subscribe to Our Latest News",
      desc: "Join the E-ROBOT community to discover emerging technologies and gain valuable insights.",
      placeholder: "Enter your email address",
      button: "Subscribe",
      submitting: "Submitting...",
      success: "Thank you for subscribing to the E-ROBOT monthly newsletter!",
      error: "An error occurred! Please try again.",
    },

    // Footer
    footer: {
      tagline: "Engaging in social development shapes the future for generations to come. We believe education is the key path to creating a thriving and innovative society.",
      quickLinks: "General Links",
      programs: "Programs & Courses",
      contact: "Contact Info",
      location: "Phnom Penh, Cambodia",
    },

    // Auth Form & Modals
    auth: {
      loginTitle: "Sign In",
      signUpTitle: "Create Account",
      googleSignIn: "Sign in with Google",
      googleSignUp: "Sign up with Google",
      orEmailLogin: "OR sign in with Email",
      orEmailSignUp: "OR sign up with Email",
      loginSub: "Welcome to the E-ROBOT Community",
      signUpSub: "Join us to discover new opportunities",
      modalLoginTitle: "Sign in to E-ROBOT",
      modalSignUpTitle: "Create E-ROBOT Account",
      modalLoginSub: "Please enter your account details to sign in",
      modalSignUpSub: "Fill in the details below to register a new account",
      googleText: "Continue with Google",
      or: "OR",
      fullName: "Full Name",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      signUpHere: "Sign up here",
      loginHere: "Sign in here",
      submitting: "Processing...",
      successLogin: "Signed in successfully!",
      successSignUp: "Account created successfully!",
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("erobot_lang") || "km";
  });

  useEffect(() => {
    localStorage.setItem("erobot_lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "km" ? "en" : "km"));
  };

  const t = translations[language] || translations.km;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
