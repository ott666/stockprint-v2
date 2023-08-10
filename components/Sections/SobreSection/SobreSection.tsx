import Container from "@/components/Container/Container";
import Link from "next/link";
import React from "react";
export default function SobreSection(){
    return(
        <section className="bg-blue-600 pt-5">
       <Container>
        <h1 className={`
        py-5
        text-6xl lg:text-7xl 
        font-bold text-center`}>Parceiros HID</h1>
       <div className={`
       flex flex-col md:flex-row lg:justify-between
       gap-5 lg:gap-0 xl:gap-[50px]
       lg:py-[50px] xl:py-[50px]
       `}>
        <div className={`
        h-fit 3xl:h-[570px]
        flex flex-col
        bg-white/10
        py-3
        gap-3 lg:gap-[27px] 3xl:gap-[50px]
        rounded-2xl
        md:w-[60%] lg:w-[50%] 3xl:w-[660px]
        `}>
        <h2 className={`
        text-xl sm:text-2xl  lg:text-3xl xl:text-3xl
        font-bold -tracking-wider
        text-justify  3xl:text-start 
        px-2 sm:px-4
        3xl:pt-[20px]
        `}>A Stockprint tem a satisfação de estabelecer uma parceria sólida com a HID Global, uma líder global em soluções de segurança e identificação</h2>
        <h2 className={`
        text-xl sm:text-2xl lg:text-3xl xl:text-3xl
        font-bold -tracking-wider
        text-justify 3xl:text-start  
        px-2 sm:px-4
        3xl:pb-[40px]
        `}>Como distribuidores, unimos a expertise da StockPrint em oferecer soluções de alta qualidade às inovações inigualáveis da HID Global.</h2>
        <button className={`
        self-center 
        p-[15px]
        w-[90%] sm:w-[75%]
        rounded-2xl
        text-4xl lg:text-5xl
        font-bold tracking-wider 
        bg-orange-400`}>
            <Link href={'/'}>Saiba mais</Link>
        </button>
        </div>
        <div className={`
        bg-hidlogo
        bg-center md:bg-top 
        bg-no-repeat
        md:bg-fit lg:bg-fit xl:bg-cover 3xl:bg-fit
        md:w-[40%] lg:w-[50%] xl:w-[50%] 3xl:w-[660px]
        h-[275px] md:h-auto lg:h-[444px] xl:h-[570px] 
        `}></div>
       </div>
       </Container>
        </section>
    )
}