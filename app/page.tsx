'use client'
import HeroSection from '@/components/Sections/Hero/HeroSection'
import MarcasSection from '@/components/Sections/MarcasSection/MarcasSection'
import Image from 'next/image'
import SobreSection from '@/components/Sections/SobreSection/SobreSection'


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <MarcasSection/>
      <SobreSection/>
    </main>
  )
}
