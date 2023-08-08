import React from "react";
import { easeInOut, motion } from "framer-motion"



export default function HeroSection(){
    return(
        <section className="w-screen">
        
        <motion.div className="bg-blue-600 2xl:bg-red-500 3xl:bg-green-500 absolute inset-0 lg:end-[60%] flex items-center justify-start pl-[250px]">
        <div className="bg-red-500 w-[500px] h-[500px]"></div>
        </motion.div>
        </section>
    )
}