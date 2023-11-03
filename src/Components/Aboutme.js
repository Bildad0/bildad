import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { SiAdobe, SiJavascript, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiFirebase, DiMongodb, DiNodejsSmall } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";


const Aboutme = () => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="bg-PrimaryColor  " id="about">
      <div className=" px-5 lg:px-16 xl:px-32  2xl:px-44 py-24 ">
        <h1 className="pb-20 text-center text-3xl font-semibold "  >About me</h1>
        <div className="flex  flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 items-center " data-aos="fade-right"  >

            <p className="text-lg text-gray-400 " >As an IT graduate, I posses different computer related skills including software trouble shooting and diagnosis, SQL express database management and SQL queries.</p>

            <p className="text-lg text-gray-400 py-6 "  ></p>
            <p className="text-lg text-gray-400 pb-6 "  > </p>

            <h2>Some of the technology stacks I have interracted with:</h2>

            <div className="flex justify-between w-3/4 lg:w-3/5 "  >
              <div className="pt-5">
                <ul className="skillList" >
                  <li className="flex items-center" > <SiJavascript /> <span className="ml-2" >JavaScript (ES6+)</span></li>
                  <li className="flex items-center" > <DiNodejsSmall /> <span className="ml-2" >Node.js</span></li>
                  <li className="flex items-center" > <DiMongodb /> <span className="ml-2" >MongoDB</span></li>
                  <li className="flex items-center"><DiFirebase/> <span className="ml-2">FireBase</span> </li>
                </ul>
              </div>
              <div className="pt-5">
                <ul className="skillList" >
                  <li className="flex items-center" > <FaReact /> <span className="ml-2" >React</span></li>
                  <li className="flex items-center" > <SiNextdotjs /> <span className="ml-2" >Next.js</span></li>
                  <li className="flex items-center" > <RiReactjsLine /> <span className="ml-2" > Flutter (mobile) </span></li>
                  <li className="flex items-center"><SiAdobe/><span className="ml-2">Photoshop</span> </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="w-1/2 AboutImg pb-32" data-aos="fade-left">
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="content"  >
                <img src="/Images/me.jpg" alt="myImg" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
