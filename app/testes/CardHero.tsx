import React from "react";
import Button from "./Button";

export default function CardHero(){
    return(
        <div className={`
        w-full max-w-[400px] sm:max-w-[550px]
        h-[370px]
        rounded-[40px]
        px-[20px]
        py-[30px]
        flex flex-col
        gap-4
        bg-gradienteAzul
        `}>
            <h1 className={`
            text-white
            text-[35px] sm:text-5xl
            
            leading-8
            font-bold
            `}>Referencia em identificacao</h1>
        
            <p className={`
            text-white
            text-xl sm:text-2xl   font-bold
            `}>Há mais de 17 anos, a Stockprint é líder em identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.
            </p>
            <div className={`
            flex items-center
            gap-5
            w-full
            
            `}>
                <Button>Impressoras</Button>
                <Button>Ribbons</Button>
            </div>
            
        </div>
    )
}