'use client'
import HeroSection from '@/components/Sections/Hero/HeroSection'
import MarcasSection from '@/components/Sections/MarcasSection/MarcasSection'
import Image from 'next/image'
import SobreSection from '@/components/Sections/SobreSection/SobreSection'
import ProdutosSection from '@/components/Sections/ProdutosSection/ProdutosSection'
import SobreSection2 from '@/components/Sections/SobreSection2/SobreSection2'
import BundleInk from '@/components/Sections/BundleInk/BundleInk'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <MarcasSection/>
      <SobreSection2/>
      <BundleInk/>
    </main>
  )
}
