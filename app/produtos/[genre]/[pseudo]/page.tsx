'use client'

import React from "react"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import Container  from "@/components/Container/Container"
import TransitionEffect2 from "@/components/LayoutComponents/TransitionEffect/TransitionEffect";


export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  return (
    <>
    <TransitionEffect2 />
    <Breadcrumb produto={produto}/>
    <Container>
    </Container>
    </>
  
  )
}