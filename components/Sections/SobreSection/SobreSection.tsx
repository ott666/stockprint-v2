import Container from "@/components/Container/Container";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import hidgold from 'public/logos/hid_gold.svg'
export default function SobreSection(){
    return(
        <section className="bg-blue-600">
        <Container>
            <h1 className="text-7xl text-center font-bold pt-[25px] md:pt-[50px] text-white">Parceiros HID Global</h1>
            <div className={
                `grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 place-content-stretch h-[1400px] lg:h-[600px] xl:h-[700px]
                pt-[30px] 
                gap-0 md:gap-x-[40px]
                `}>
                    <div className="text-start justify-center flex flex-col items-center backdrop-blur-2xl bg-white/10 rounded-3xl my-[50px]  ">
                        <h2 className="text-3xl -tracking-wider text-start font-bold  pb-[50px] px-[20px] ">A Stockprint tem a satisfação de estabelecer uma parceria sólida com a HID Global, uma líder global em soluções de segurança e identificação.
                        </h2>
                        <h2 className="text-3xl -tracking-wider text-start font-bold  pb-[50px] px-[20px] ">Como distribuidores, unimos a expertise da StockPrint em oferecer soluções de alta qualidade às inovações inigualáveis da HID Global. 
                        </h2>
                        <button className="bg-orange-400 p-[30px] w-[80%] rounded-3xl">
                            <Link className="text-slate-200 text-5xl font-bold" href={''}>Saiba mais</Link>
                        </button>
                    </div>
                    <div className="relative my-[50px]">
                        <Image src={hidgold} fill={true} alt="logo"/>
                    </div>
            </div>
        </Container>
        </section>
    )
}