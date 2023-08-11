'use client'
import React from "react"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import { Container } from "@/components/Container/Container"
import ProductSection from "@/components/ProductSection/ProductSection"
import TransitionEffect2 from "@/components/TransitionEffect/TransitionEffect2"
import ProductSectionRib from "@/components/ProductSectionRib/ProductSectionRib"

export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  return (
    <>
    <TransitionEffect2 />
    <Breadcrumb produto={produto}/>
    <Container>
      <ProductSectionRib lista={produto} />
    </Container>
    </>
  
  )
}