import React from "react";
import { easeInOut, motion } from "framer-motion"
import HeroCard from "./HeroCard";

export default function HeroSection(){
    return(
        <section className="min-w-screen min-h-screen relative md:mt-[130px] lg:mt-0">
        <img src="logos/logo.svg" className={`
        absolute
        top-[20%] mm:top-[15%] sm:top-[10%] md:top-5 lg:top-[50%] lg:translate-y-[-50%] 
        px-4 lg:right-[0] xl:translate-x-[0%] lg:w-[55%] 2xl:max-w-[60%]
        xl:mr-[50px] 2xl:mr-[35px] 3xl:mr-[50px]
        z-[5]
        `}></img>
        <div className="bg-black/30 h-full w-full absolute">
        
        <video autoPlay muted loop className={`
        w-full h-full absolute top-0 left-0 block z-[-1] object-cover
        `}>
            <source src="video/video1.mp4"/>

        </video>
        
        </div>
        <motion.div className={`
        bg-blue-600
        absolute 
        inset-0  top-[50%] lg:top-0  lg:end-[60%]  
        z-[2] 
        flex 
        justify-center lg:justify-end 
        items-center 
        pr-0 lg:pr-[20px] 3xl:pr-[45px]`}>
        <HeroCard />
        </motion.div>

        
        </section>
    )
}