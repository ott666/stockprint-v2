import { useState } from "react";
import GenerosProdutos from "@/components/Produtos/GenerosProdutos/GenerosProdutos";
import ListaProdutos from "@/components/Produtos/GridProdutos/GridProdutos";
import  Container  from "@/components/Container/Container";

export default function ProdutosSection(){
    const [selectedGenre, setSelectedGenre] = useState("");
    return(
        <Container>
        <div className="flex flex-col w-full justify-center items-center mt-[50px]">
          <div className="w-full flex justify-center">
              <GenerosProdutos
                selectedGenre={selectedGenre}
                onSelect={setSelectedGenre}
              />
            </div>
            
            
              <ListaProdutos selectedGenre={selectedGenre} />
        </div>
          
        </Container>
    )
}