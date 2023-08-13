'use client'
import HeroSection from '@/components/Sections/Hero/HeroSection'
import MarcasSection from '@/components/Sections/MarcasSection/MarcasSection'
import Image from 'next/image'
import SobreSection from '@/components/Sections/SobreSection/SobreSection'
import ProdutosSection from '@/components/Sections/ProdutosSection/ProdutosSection'
import SobreSection2 from '@/components/Sections/SobreSection2/SobreSection2'
import BundleInk from '@/components/Sections/BundleInk/BundleInk'
import ServicosSection from '@/components/Sections/ServicosSection/ServicosSection'
import TransitionEffect from '@/components/LayoutComponents/TransitionEffect/TransitionEffect'

export default function Home() {
  
  return (
    <main>
      <TransitionEffect/>
      <HeroSection/>
      <MarcasSection/>
      <SobreSection2/>
      <ProdutosSection/>
      <ServicosSection/>
      
    </main>
  )
}
