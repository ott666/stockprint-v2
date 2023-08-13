'use client'

import React from "react"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import Container  from "@/components/Container/Container"
import TransitionEffect from "@/components/LayoutComponents/TransitionEffect/TransitionEffect";
import CarrosselProdutos from "@/components/Produtos/CarrosselProdutos/CarrosselProdutos"

export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  console.log('produto' , produto)
  return (
    <>
    <TransitionEffect />
    
    <Breadcrumb produto={produto}/>
    <Container>
      <div>
        <CarrosselProdutos produto={produto} />
      </div>
    </Container>
    </>
  
  )
}