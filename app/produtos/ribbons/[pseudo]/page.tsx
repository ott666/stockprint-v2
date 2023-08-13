'use client'
import React from "react"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import Container  from "@/components/Container/Container"
import TransitionEffect from "@/components/LayoutComponents/TransitionEffect/TransitionEffect"
import ProductDetails from "@/components/Produtos/ProductDetails/ProductDetails"
export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  return (
    <>
    <TransitionEffect />
    <Breadcrumb produto={produto}/>
    <Container>
    <div className="h-screen">
      
    </div>
    </Container>
    </>
  
  )
}