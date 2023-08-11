import React from "react";
import Image from "next/image";


interface CardProductProps{
    urlproduct:any
    altproduct:string
    title:string
    subt:string
}

export function CardProduct(props: CardProductProps){
    return (
        <div className={` group flex justify-center items-center min-w-[300px] h-[258px] relative` }>
            
            
            <Image className="rounded-3xl" src={props.urlproduct} width={350} height={200} alt={props.altproduct} />

            <div className="text-start font-sans text-white opacity-0 absolute flex flex-col bottom-0 left-0 right-0 bg-secondaryBlue group-hover:opacity-100 h-[100px] z-4 ease-in-out duration-300 p-[15px] rounded-full">
                <h4 className="pb-[5px] pl-5 text-xl font-bold">{props.title}</h4>
                <p className=" pl-5">{props.subt}</p>
            </div>
        </div>
    )
}