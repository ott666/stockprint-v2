import Image from "next/image";
import React from "react";

interface CardbundleProps{
    title:string
    imgPath:string
    subtitle:string
    subtitle2:string
    bgColor:string
}

export default function Cardbundle(props:CardbundleProps){
    return(
        <div className={`
        w-[325px] mm:w-[375px] xl:w-[300px] xl:w-
        h-[294px] mm:h-[347.5px]  xl:h-[266px]
        relative
        group
        rounded-3xl
        overflow-hidden
        
        `}>
            <div className={`
            bg-sky-950/70
            h-full
            w-full
            absolute
            -z-[-2]
            translate-x-[-120%] group-hover:translate-x-0
            ease-in-out
            duration-700
            text-center
            flex items-center justify-center
            
            `} >
                <h3 className={`
                text-4xl
                font-bold
                text-slate-300
                -tracking-wider
                `}>{props.title}</h3>
                 <div className={`
                absolute
                inset-x-0 bottom-0 h-20
                -z-[0]
                bg-blue-500/90
                rounded-t-2xl
                flex flex-col justify-center items-center
                gap-y-0`
                }>
                <h4 className={`
                text-3xl
                font-semibold
                -tracking-widest
                text-slate-300
                `}>{props.subtitle}</h4>
                <h4 className={`
                text-3xl
                font-semibold
                -tracking-widest
                text-slate-300
                `}>{props.subtitle2}</h4>
                </div>
            </div>
           
            <Image 
                style={{zIndex:1,
                    backgroundColor:props.bgColor}}
                src={props.imgPath} fill={true} alt="img"/>

        </div>
        
    )
}