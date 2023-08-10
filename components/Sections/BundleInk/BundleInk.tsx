import Container from "@/components/Container/Container";
import Link from "next/link";
import Cardbundle from "@/components/Produtos/CardBundle/CardBundle";
import Produtos from "@/data/products.json"


export default function GenerosSection(){
   
    
    return(
        <section className="bg-blue-600 h-fit ">
        <Container>
         <h1 className={`
         text-white
         xl:pt-5
         text-center
         font-bold
         text-6xl`}>Bundle INK1000</h1>
         <div className={`
         flex flex-col
         h-fit
         `}>
            <div className={`
            md:flex md:flex-row
            
            
`}>
            <div className={`
            relative
            h-[320px] mm:h-[450px] sm:h-[500px]
            w-full`}>
                <div className={`
                bg-ink1000card
                bg-contain md:bg-cover
                bg-center
                bg-no-repeat
                absolute
                inset-0
                xl:h-[900px]
                xl:mr-[50px]
                xl:translate-y-[-60px]
                `}>
                    <button className={`
                text-sm xl:text-7xl
                invisible xl:visible
                bg-green-400
                text-zinc-100

                py-[40px]
                w-[80%]
                rounded-3xl
                translate-y-[100px]
                absolute
                right-[50%]
                translate-x-[50%]
                -tracking-wider
                font-bold
                bottom-[0]`}>Whatsapp</button>
                </div>
                
            </div>
            
            <div className={`
            flex flex-col 
            md:pt-[40px]
            text-slate-200
            h-fit
            `}>
                <p className={`
                text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                font-bold
                text-justify lg:text-start 3xl:text-start
                -tracking-wider
                px-1
                py-1
                `}>Confira nosso pacote completo com o melhor preço do mercado.
                </p>
                <p className={`
                 text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                 font-bold
                 text-justify lg:text-start 3xl:text-start
                 -tracking-wider
                 px-1
                 pt-3
                 `}>Este pacote inclui: 
                 </p>
                <ul className={`
                 text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                 font-bold
                 -tracking-wider
                 pl-5
                 pt-2
                 list-disc
                 `}>
                <li className={`
                py-1
                `}>1 Cartucho de tinta YMC</li>
                <li className={`
                py-1
                `}>Software de impressão Asure ID 7</li>
                <li className={`
                py-1
                `}>Impressora HID FARGO INK1000</li>
                 <li className={`
                py-1
                `}>100 cartões PVC branco</li>
              
                </ul>
                <button className={`
                text-4xl 
                font-bold
                py-3
                mt-2
                w-full lg:max-w-[95%]
                lg:self-center
                text-blue-500
                rounded-3xl
                bg-white
                `}>
                    <Link 
                    href={'/'}>R$5.300,00</Link>
                </button>
                
            </div>
            </div>
            <div className={`
                flex flex-wrap 
                md:mx-[-30px] lg:mx-0
                xl:w-[620px]
                xl:self-end
                xl:translate-x-5
                

                justify-center
                gap-4 xl:gap-x-1 xl:gap-y-3
                xl:translate-y-[-40px]
                pt-5`}>
                    <Cardbundle title="Cartucho de tinta YMC" subtitle="Até 1300 impressões" subtitle2="Para Fargo INK1000" imgPath="/cartucho/cartucho8.png" bgColor="#0C1842C2"/>
                    <Cardbundle title="Software Asure ID 7" subtitle="Crie layouts" subtitle2="Acesso vitalício" imgPath="/software/asureid7.png" bgColor="#0C1842C2"/>
                    <Cardbundle title="Cartão PVC branco" subtitle="Pacote Fargo Ultracard" subtitle2="100 Cartões selados" imgPath="/cartaopvc/cartaopvc.png" bgColor="#0C1842C2"/>
                    <Cardbundle title="Fargo INK1000" subtitle="Imprime sem bordas" subtitle2="Não utiliza cabeça" imgPath="/ink1000/ink10009.png" bgColor="#0C1842C2"/>

                </div>

         </div>
        </Container>
        </section>
    )
}