import React from "react"
import Container from "@/components/Container/Container"
import MarcaCard from "./MarcaCard"
export default function MarcasSection(){
    return(
        <section className="bg-blue-600 h-[1000px] md:h-fit pt-[50px] md:pb-[50px]">
           <Container>
                <h1 className={`
                        text-white text-center font-bold
                        text-4xl mm:text-5xl lg:text-7xl 
                    
                    `}>
                    Nossos fornecedores
                </h1>
                <div className="flex justify-between pt-[50px]  md:px-7">
                    <div className={`
                        bg-transparent
                        w-full
                        h-[800px] md:h-[600px]
                        grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2
                        px-5 md:px-0
                        
                        place-items-stretch
                        gap-5
                    `}>
                        <MarcaCard marca="hid"/>
                        <MarcaCard marca="entrust"/>
                        <MarcaCard marca="zebra"/>
                        <MarcaCard marca="evolis"/>
                    </div>
                    
                </div>
                </Container>           
        </section>
    )
}