import React from 'react'
import Container  from '@/components/Container/Container'

const Footer = () => {
  
  
    return (
        <div className='w-full bg-blue-700'>
        <Container>
        <div className='h-[40vh] text-white font-sans flex items-center'>

        <div className='flex max-w-[1246px] px-[15px] mx-auto gap-[15px] justify-between'>
            <div className='flex flex-col w-[41%] h-full '>
                <a href='#' className=' text-4xl font-bold'>Stockprint</a>
                <p className='pt-[15px] text-xl font-bolder'>
                    Há mais de 17 anos, a Stockprint é líder no mercado de identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.
                </p>
            </div>
            <div className='flex flex-col h-full'>
                <h4 className='text-xl 2xl:text-2xl font-semibold'>Links úteis</h4>
                <ul className='xl:text-xl font-bolder'>
                <li className='py-2'> <a href="/">- Home</a></li>
                <li className='py-2'> <a href="/servicos">- Serviços</a></li>
                <li className='py-2'> <a href="/contato">- Contato</a></li>
                </ul>
            </div>
            <div className='flex flex-col h-full'>
                <h4 className='text-xl 2xl:text-2xl font-semibold'>Produtos</h4>
                <ul className='xl:text-xl font-bolder'>
                <li className='py-2'> <a href="/produtos">- Impressoras</a></li>
                <li className='py-2'> <a href="/produtos">- Ribbons</a></li>
                <li className='py-2'> <a href="/produtos">- Limpeza</a></li>
                <li className='py-2'> <a href="/produtos">- Etiquetas</a></li>
                </ul>
            </div>
            <div>
                <h4 className='text-xl font-semibold 2xl:text-2xl'>Contato</h4>
                <p className='pt-2 xl:text-xl'>Rua Rangel Pestana, 547</p>
                <p className='py-0 xl:text-xl'>Ribeirão Preto, São Paulo </p>
                <p className='pb-2 xl:text-xl'>14030-210 Brasil</p>

                <p className='pt-[35px] text-xl'><strong>Phone:</strong> +16 3237-8150</p>
                <p className='text-xl'><strong>Email:</strong> vendas2@stockprint.com.br</p>
                
            </div>

        </div>
    </div>
    </Container>
    </div>
  )
}

export default Footer