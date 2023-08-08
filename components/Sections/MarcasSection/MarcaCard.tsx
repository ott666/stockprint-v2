import React from "react"
import Image from "next/image"

interface propsMarcaCards{
    marca:string
}

export default function MarcaCard(props:propsMarcaCards){
    return(
        <div className="relative ">
            <Image src={`logos/${props.marca}2.svg`} fill={true} alt="logo" style={{backgroundColor:'white', borderRadius:'50px'}}/>
        </div>
    )
}
