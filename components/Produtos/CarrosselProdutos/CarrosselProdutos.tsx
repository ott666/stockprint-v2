import React from 'react'
import {Carousel} from 'react-responsive-carousel'

export default function CarrosselProdutos(props:any){

        const fotosProduto = [
            
                [`/${props.lista.pseudo}/${props.lista.pseudo}1.png`],
                [`/${props.lista.pseudo}/${props.lista.pseudo}2.png`],
                [`/${props.lista.pseudo}/${props.lista.pseudo}3.png`],
                [`/${props.lista.pseudo}/${props.lista.pseudo}4.png`],
                [`/${props.lista.pseudo}/${props.lista.pseudo}5.png`]
            
        ]
    
    return(
        <div>
             <Carousel>
            {fotosProduto.map((produto)=>(
                <div key={props.lista.pseudo} className="bg-cover">
                    <img src={`${produto}`} alt={`${produto}`}/>
                </div>
            ))}
            </Carousel>
        </div>
    )
}