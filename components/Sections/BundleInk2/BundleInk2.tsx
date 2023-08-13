import Container from "@/components/Container/Container";
import { animate, motion, stagger } from "framer-motion";
export default function BundleInk2(){
    const cardVariations={
        initial:{
            y:'-50%',
            
        },
        animation:{
            y:0,
            backgroundColor:'red',
            transition:{
                 type:'easeInOut',
                 staggerChildren: 0.1,
                delayChildren: 1,
                }
        }

    }
    const liVariations={
        initial:{
            x:'-30%',
            opacity:0,
        },
        animation:{
            x:'0%',
            opacity:1
        }
    }
    return(
        <section>
            <Container>
            <h1 className={`
            text-4xl text-white text-center px-5 pt-5
            font-bold
            `}>Bundle INK1000</h1>
            <div className={`
            h-screen
            `}>
                <div>
                    <img src="" alt="ink1000" />
                </div>
                <motion.div 
                variants={cardVariations}
        
                initial='initial'
                whileInView='animation'
                className={`
                flex flex-col h-fit
                items-center
                gap-y-2
                `}>
                    <motion.h1 
                    variants={liVariations}
                    className={`
                    text-white text-2xl
                    font-bolder
                    text-justify
                    -tracking-widest
                    
                    
                    `}>Confira nosso pacote completo com o melhor preço do mercado.
                    </motion.h1>
                    
                    <motion.h1 
                    variants={liVariations}
                    className={`
                    text-white text-2xl
                    font-bolder
                    -tracking-widest
                    pt-2
                                       
                    
                    `}>Este pacote inclui:
                    </motion.h1>
                    
                    <ul 
                    className={`
                    text-xl font-bolder
                    -tracking-widest
                    list-disc
                    pl-5
                    `}>
                    <motion.li 
                    variants={liVariations}
                    className={`
                    py-1
                    `}>1 Cartucho de tinta YMC</motion.li>
                    <motion.li 
                    variants={liVariations}
                    className={`
                    py-1
                    `}>Software de impressão Asure ID 7</motion.li>
                    <motion.li 
                    variants={liVariations}
                    className={`
                    py-1
                    `}>Impressora HID FARGO INK1000</motion.li>
                    <motion.li
                    variants={liVariations}
                     className={`
                    py-1
                    `}>100 cartões PVC branco</motion.li>
                
                    </ul>
                </motion.div>
            </div>
            </Container>
        </section>
        )
}