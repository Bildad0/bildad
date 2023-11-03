import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { FiExternalLink } from "react-icons/fi";
import {MdWork} from "react-icons//md";

const Projects = () => {
 
    const ProjectArray = [
        {
            image: "/Images/Project-mockup/sendwave.png",
            name: "Send wave website clone",
            link: 'https://sendwaveclone.vercel.app/',
            desc: 'A Clone of send wave website a money transfer company'
        },
        {
            image: "/Images/Project-mockup/isp.png",
            name: "Internet provider",
            link: 'https://internet-provider-nu.vercel.app/',
            desc: "Internet provider page"

        },
        {
            image: "/Images/Project-mockup/hungman1.jpg",
            name: "Hung man game",
            link: 'https://github.com/Bildad0/Hang-Man-Game',
            desc: "A c# console app for word and letter geusing"
        },
    
    ]

    return (
        <section className="bg-SecondColor">
            <div className="containers px-34 lg:px-12 xl:px-32  2xl:px-44 py-30  ">
                <h1 className="py-20 px-11 text-center text-3xl font-semibold text-gray-400 "  >Some of the projects I have been playing around with</h1>

                {/* Add work experince here */}
                {/* <div className="flex w-full flex-wrap">
                    <div className="flex flex-row gap-4">
                    <MdWork className="text-white text-2xl text-center"/>
                    <div>
                        <h1>Herufi Africa <i><b>2022 - 2023</b></i></h1>
                        <p>I worked for a period of 1 and a half year.</p>
                        </div>
                    </div>
                    
                </div> */}

                <div className="flex w-full flex-wrap " id="portfolio">
                    {
                        ProjectArray.map((item, i) => {
                            return (
                                <div key={i} className="Card w-full lg:w-1/2 px-2 pt-10 mb-14" >
                                    <img src={item.image} alt="img" data-aos="zoom-in-up" loading="lazy" className="px-8 md:px-32 lg:px-32 xl:px-32" />
                                    <div className=" ProjectCta-grid" >
                                        <div className="">
                                            <h1 className="text-2xl font-medium pb-3 " >
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="">{item?.name}</a>
                                                </h1>
                                            <p className="font-medium" >{item?.desc}</p>

                                        </div>
                                        <div className="ProjectCta invisible md:visible lg:visible xl:visible ">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className=" text-2xl mb-3 " > <FiExternalLink /> </a>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium  cool-link  " >Visit Website</a>

                                        </div>
                                    </div>
                                </div>



                            )
                        })
                    }

                </div>
            <a href="https://github.com/Bildad0?tab=repositories" target="_blank" rel="noopener noreferrer" className=" bg-transparent text-center border-gray-400 border-border1 px-8 py-3 mt-5 rounded-sm mx-auto font-bold tracking-wider hover:bg-white  hover:text-gray-700 transition duration-200 ease-in-out " >More Projects</a>

            </div>
        </section>
    )
}

export default Projects
