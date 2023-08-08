import React from "react";
import { easeInOut, motion } from "framer-motion"
import HeroCard from "./HeroCard";

export default function HeroSection(){
    return(
        <section className="min-w-screen min-h-screen">
        
        <motion.div className="bg-blue-600  absolute inset-0  z-[-1] lg:end-[60%] flex justify-center lg:justify-end items-center pr-0 lg:pr-[20px] 3xl:pr-[45px]">
        <HeroCard />
        </motion.div>

        
        </section>
    )
}