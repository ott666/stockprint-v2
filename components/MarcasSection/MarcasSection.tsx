import React from "react"
import Container from "../Container/Container"
import Link from "next/link"
import Image from "next/image"
export default function MarcasSection(){
    return(
        <section>
            <Container>
                <div className={`
                        h-[900px] lg:h-[700px] 
                        bg-secondaryBlue
                        flex flex-col lg:flex-row 
                        items-center
                        justify-center
                    `}>

                        <div className={`
                            w-full lg:w-[50%]
                            bg-green-400 lg:bg-red-400
                            h-[400px] lg:h-fit
                            flex flex-wrap justify-between 
-                        `}>
                        <div className={`
                            relative h-[123px] w-[300px]
                        `}>
                            <Image src='logos/evolis.svg' alt="logo" fill={true}></Image>
                        </div>
                        
                        <div className={`
                            relative h-[123px] w-[300px]
                            
                        `}>
                            <Image src='logos/hid.svg' alt="logo" fill={true}></Image>
                        </div>

                        <div className={`
                            relative h-[123px] w-[300px]
                            
                        `}>
                            <Image src='logos/zebra.svg' alt="logo" fill={true}></Image>
                        </div>

                        <div className={`
                            relative h-[123px] w-[300px]
                            
                        `}>
                            <Image src='logos/entrust.svg' alt="logo" fill={true}></Image>
                        </div>
                        </div>
                    
                        <div className={`
                            w-full lg:w-[50%]
                            bg-purple-400 lg:bg-orange-400
                            h-[400px] lg:h-[700px]
                        `}>

                        </div>
                </div>
            
            </Container>
        </section>
    )
}