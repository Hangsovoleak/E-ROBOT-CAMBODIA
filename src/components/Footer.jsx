import React from "react";

import ERobotLogo from "../assets/ERobot.png";
import Facebook from "../assets/facebook.png";

import about from "../pages/AboutUs";
import goal from "../pages/Goals";
import activity from "../pages/Events";

function Footer() {
  return (
    <footer
      className="
        bg-[#192048]
        text-white
        
        px-4
        sm:px-6
        md:px-10
        lg:px-20
        
        py-12
        md:py-16
        
        border-t
        border-white/5
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          
          gap-10
          md:gap-12
        "
      >

        <div className="flex flex-col gap-6">
          
          <div className="flex items-center gap-3">
            <img
              src={ERobotLogo}
              alt="E-Robot"
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                
                rounded-full
                object-cover
              "
            />

            <p
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                
                font-black
                tracking-tight
                italic
              "
            >
              E-ROBOT
            </p>
          </div>

          <p
            className="
              text-white/60
              
              text-sm
              sm:text-base
              
              leading-relaxed
              
              max-w-md
              
              font-[Kantumruy_Pro]
            "
          >
            ចូលរួមជាមួយយើងដើម្បីកុមារកម្ពុជា និងជាផ្នែកមួយនៃការជំរុញ
            ការអប់រំផ្នែកបច្ចេកវិទ្យាឱ្យកាន់តែរីកចម្រើន។
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <a
              href="https://www.facebook.com/share/1bJ4sJVeN8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                
                flex
                items-center
                justify-center
                
                bg-white/10
                rounded-full
                
                hover:bg-white/20
                hover:scale-110
                
                transition-all
                duration-300
              "
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p
            className="
              text-lg
              sm:text-xl
              
              font-bold
              uppercase
              tracking-widest
              
              text-white/40
            "
          >
            មាតិកា
          </p>

          <ul
            className="
              flex
              flex-col
              gap-3
              
              text-sm
              sm:text-base
              
              text-white/80
            "
          >
            <li>
              <a
                href={about}
                className="hover:text-white transition-colors"
              >
                អំពីយើង
              </a>
            </li>

            <li>
              <a
                href={goal}
                className="hover:text-white transition-colors"
              >
                គោលដៅ
              </a>
            </li>

            <li>
              <a
                href={activity}
                className="hover:text-white transition-colors"
              >
                ព្រឹត្តិការណ៍
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                មាតិកាសិក្សា
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <p className=" text-lg sm:text-xl font-bold uppercase tracking-widest text-white/40 ">
            ទំនាក់ទំនង
          </p>

          <div className=" flex flex-col gap-4 text-sm sm:text-base text-white/80 ">
            <div className="break-all">
              <span>erobotteam@gmail.com</span>
            </div>

            <div>
              <span>+855 10 567 014</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 pt-6 border-t border-white/10 text-center">
        <p className=" text-xs sm:text-sm  text-white/50">
          E-ROBOT - អ៊ី រ៉ូបូត គឺជាអង្គការដែលមានបេសកកម្មក្នុងការផ្តល់នូវការអប់រំផ្នែកបច្ចេកវិទ្យា និងសហគ្រិនភាពដល់កុមារកម្ពុជា។​
        </p>
      </div>
    </footer>
  );
}

export default Footer;