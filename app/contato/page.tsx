'use client'
import Breadcrumb2 from "@/components/Breadcrumb2/Breadcrumb2";
import ContactSection from "@/components/ContactSection/ContactSection";
import { Container } from "@/components/Container/Container";
import TransitionEffect2 from "@/components/TransitionEffect/TransitionEffect2";
import React from "react";

export default function Page(){
    return(
        <div className=" flex flex-col items-center">
            <Breadcrumb2 props='Contato'/>
            <TransitionEffect2 />
            <Container>
            <ContactSection />

            </Container>
        </div>
        
    )
}