import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Aboutme from '../../Components/Aboutme'
import Footer from '../../Components/Footer'
import Projects from '../../Components/Projects'
import SocialMedia from "../../Components/SocialMedia";

const HomePage = () => {
    useEffect(() => {
        Aos.init({
          duration:2000
        })
      }, [])
    return (
        <section className="bg-SecondColor">
                {/* Introduction */}
            <div className="container pl-3 md:pl-20 lg:pl-32 min-h-screen ">
                {/* large screens navBar */}
                <div className="bg-SecondColor flex justify-center  invisible sm:invisible md:visible lg:visible xl:visible">
                    <ul className="text-rgba(255,255,255,0.8) flex flex-row gap-x-8 my-nav-bar md:text-2xl text-xl font-bold my-6  flex-4">
                    <li className=""><a href="#up">Home</a></li>
                    <li data-aos="fade-left"><a href="#about">About</a></li>
                    <li data-aos="fade-left"><a href="#portfolio">Portfolio</a></li>
                    </ul>
                </div>
                <div className="font-Poppins pt-28 md:pt-52 ">
                    <h4 >Hi, my name is</h4>
                    <h1 className="md:text-5xl text-3xl font-bold my-6  flex-1 name" >Bildad <span  data-aos="fade-right" className="text-gray-400">Owuor</span></h1>
                    <h1 className="md:text-6xl text-4xl font-bold mb-5"  > I build things for the web </h1>
                    <p className="w-full md:w-2/3" >Am a person who likes fixing things, be it technically or by using a computer.</p>

                    <div className="pt-10 space-y-4 md:space-x-4">
                        <button className="btn" ><a href=" mailto:bildadowuor@gmail.com">Get In Touch</a></button>
                        <button className="btn"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vRQXma34WkdmSsufidtFP124gt6TAiUMPq7B2iSTCjCrEGmAJvIkAS5UN-hNQyQFJ5lGrPEFexf8O5Q/pub">View My CV</a></button>
                    </div>
                </div>
            </div>
            {/* <Loader/> */}

            <SocialMedia />

            <Aboutme />

            <Projects />

            <Footer />
        </section>
    )
}

export default HomePage
