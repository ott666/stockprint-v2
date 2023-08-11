import React from 'react'
import  Container from '@/components/Container/Container'
import CardServico from '@/components/CardServico/CardServico'
import Icon1 from '@/assets/icons/id-icon.svg' 
import Icon2 from '@/assets/icons/chave-icon.svg' 
import Icon3 from '@/assets/icons/orcamento-icon.svg' 
import Icon4 from '@/assets/icons/trofeu-icon.svg' 
import Icon5 from '@/assets/icons/caminhao-icon.svg' 
import Icon6 from '@/assets/icons/grow-icon.svg' 

const ServicosSection = () => {
  return (
    <section className={`
    bg-blue-600
    `}>
    <Container>
        <div className='flex flex-col items-center w-full pt-[50px] pb-[100px]'>
            <h1 className='text-3xl xl:text-7xl font-bold font-sans pb-[30px]'>Nossos Serviços</h1>
            <div className='flex flex-wrap justify-between gap-x-2 gap-y-[30px] w-full'>
            <CardServico title='Desenvolvimento de layouts'
            icon='/icons/id-icon.svg' 
            text='Destaque-se da concorrência com um design que cativa e encanta. Sua marca merece um cartão que transmita profissionalismo e criatividade.'/>
            
            <CardServico title='Consertamos sua impressora!' 
            icon='/icons/chave-icon.svg' 
            text='Nos dedicamos a oferecer soluções de manutenção que garantem o máximo desempenho e eficiência de seus equipamentos.'/>
            
            <CardServico title='Desvendando Oportunidades'
            icon='/icons/grow-icon.svg'  
             text='Se você busca soluções precisas e inovadoras no ramo de identificação, está no lugar certo! Nossa consultoria é especializada em ajudar empresas e organizações a aprimorar seus processos de identificação e segurança.'/>

            
            
            <CardServico title='Garantia Total em Nossos Produtos!'
            icon='/icons/trofeu-icon.svg' 
             text='Se você busca soluções precisas e inovadoras no ramo de identificação, está no lugar certo! Nossa consultoria é especializada em ajudar empresas e organizações a aprimorar seus processos de identificação e segurança.'/>
            
            <CardServico title='Entregas para Todo o Brasil'
            icon='/icons/caminhao-icon.svg'             
            text='Agora você pode desfrutar da comodidade de adquirir nossos produtos, não importa onde esteja no Brasil. Faça seu pedido hoje mesmo e aguarde a chegada dos nossos itens de qualidade!'/>
            
            <CardServico title='Orçamentos Rápidos'
            icon='/icons/orcamento-icon.svg' 
             text='Não perca tempo buscando por suprimentos em vários lugares. Com nosso atendimento ágil, você economiza tempo e foca no crescimento do seu negócio.'/>
            </div>

        </div>
    </Container>
    </section>
    )
}

export default ServicosSection