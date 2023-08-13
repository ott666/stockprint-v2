import React from "react";
import Button from "./Button";
import CardHero from "./CardHero";


export default function Home(){
    return(


        <div className={`
        h-screen
        w-full        
            flex 
            flex-col items-center justify-start
            md:flex-row-reverse md:justify-between
        
        bg-gradienteAzulRisk
        px-1 lg:px-0 lg:pl-5
        pt-28
        gap-y-3 lg:gap-x-5 
        pb-2 md:pb-0
        
        `}>
            <div className={`
            h-full
            w-full
            flex justify-center
            relative
            overflow-hidden
            `}>
                <img src="logos/logo.svg" className="w-full px-1 md:pt-1 z-10"></img>

                <div className={`
                absolute  w-[1920px]  h-auto`}>
                    <div className="h-full w-full absolute bg-black/30 inset-0"></div>
                    <video autoPlay muted loop src="/video/video1.mp4"></video>
                </div>
            </div>
            <CardHero/>        
        </div>
    )
}