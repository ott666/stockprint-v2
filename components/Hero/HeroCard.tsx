import React from "react";
import Link from "next/link";

export default function HeroCard(){
    return(
        <div className="
        w-full md:max-w-[800px] lg:max-w-[400px] 3xl:max-w-[430px]  px-3 sm:px-[15px] lg:p-0  flex flex-col  first-letter gap-y-[20px]"> 
            <h1 className="text-5xl text-center lg:text-start sm:text-6xl lg:text-6xl 3xl:text-7xl font-bold">Foco no que importa</h1>
            <p className="text-xl text-center lg:text-start sm:text-3xl lg:text-2xl pr-0 3xl:pr-[5px]">Há mais de 17 anos, a Stockprint é líder no mercado de identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.</p>
            <button className="bg-secondaryBlue p-[30px] w-full rounded-3xl">
                <Link href={''}>Saiba mais</Link>
            </button>
        </div>
    )
}