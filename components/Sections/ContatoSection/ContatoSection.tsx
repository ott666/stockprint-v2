import React from "react";
import Container  from "@/components/Container/Container";

import Image from "next/image";

export default function ContactSection(){
    return(
       <div className="flex h-[60vh] items-center justify-between screen-w font-sans">
 
        <div className="flex-col">

        <div className="flex">
                <div className="max-w[100px] flex items-center">
                    <Image src='/icons/locationIcon.svg' alt='icon' width={70} height={100} 
                    />
                </div>
                <div className="py-5 pl-5">
                    <h1 className="text-2xl font-semibold">Endereço:</h1>
                    <p className="text-xl ">Rangel Pestana 547, Ribeirão Preto - SP 14030-210</p>
                    <p className="text-xl">Em frente ao Banco do Brasil</p>
                </div>
        </div>

        <div className="flex">
                <div className="max-w[100px] flex items-center">
                    <Image src='/icons/mailIcon.svg' alt='icon' width={70} height={100} 
                    />
                </div>
                <div className="py-5 pl-5">
                    <h1 className="text-2xl font-semibold">E-mail:</h1>
                    <p className="text-xl ">vendas2@stockprint.com.br</p>
                </div>
        </div>


        <div className="flex">
                <div className="max-w[100px] flex items-center">
                    <Image src='/icons/phoneIcon.svg' alt='icon' width={70} height={100} 
                    />
                </div>
                <div className="py-5 pl-5">
                    <h1 className="text-2xl font-semibold">Telefone:</h1>
                    <p className="text-xl ">16 3237-8150</p>
                </div>
        </div>

        </div>

        <div>forms</div>
       </div>
    )
}