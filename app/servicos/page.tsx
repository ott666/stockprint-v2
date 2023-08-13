'use client'
import React from "react";
import Breadcrumb2 from "@/components/Breadcrumb2/Breadcrumb2";
import Servicos from "@/components/Sections/ServicosSection/ServicosSection";
import TransitionEffect from "@/components/LayoutComponents/TransitionEffect/TransitionEffect";

export default function Page(){
    return(
        <div className='w-full flex flex-col'>
            <TransitionEffect/>

            <Breadcrumb2 props='Servicos'/>
            <Servicos/>
        </div>
    )
}