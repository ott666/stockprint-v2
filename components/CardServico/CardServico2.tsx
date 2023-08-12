import React from 'react'
import Image from 'next/image'

interface CardServicoProps{
    title:string
    text:string
    icon:string
}

const CardServico = (props: CardServicoProps) => {
  return (
    <div className={`
    md:gap-5 lg:gap-3
    w-full lg:w-[49%]
    lg:h-[300px]
    
    pb-3
    pt-2 
    pl-2 
    pr-1 
    rounded-3xl 
    text-white 
    bg-blue-900 
    flex align-start lg:items-center 
    font-sans
    `}>
       <Image className='ml-[25px] absolute invisible md:visible md:static' 
    src={props.icon}
    alt='icon'
    width={90}
    height={30}/>
        <div className='flex flex-col  justify-start lg:justify-start lg:pt-5 lg:gap-5 h-full'>
            <h2 className={`
            
            text-3xl pb-2 lg:p-0  font-semibold 
            `}>{props.title}</h2>
            <p className={`
            text-xl text-start
            font-bolder
            lg:p-0`}>{props.text}</p>
        </div>
    </div>
  )
}

export default CardServico