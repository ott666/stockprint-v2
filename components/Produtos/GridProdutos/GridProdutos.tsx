// import ListaProdutos
import produtosData from "@/data/products.json";
import { CardProduct } from "@/components/Produtos/CardProduct/CardProduct";
import Link from "next/link";

type Props = {
  selectedGenre?: string;
};

const ListaProdutos = ({ selectedGenre }: Props) => {
  // Lines 9-11 if there's a selectedGenre we use the array.filter function to filter the product data
  // otherwise, return all the ListaProdutos.
  const filteredMoviesByGenre = selectedGenre
    ? produtosData.filter((product) => product.genre.includes(selectedGenre))
    : produtosData;
  return (
    <div className={`
    p-2 
    flex flex-wrap justify-center   
    gap-y-0 mm:gap-y-7 xl:gap-y-6
    gap-x-10 
    `}>
      {/* map through all the filtered ListaProdutos */}
      {filteredMoviesByGenre.map((product) => {
       
        return (
          <Link href={`/produtos/${product.genre}/${product.pseudo}`} key={product.pseudo}> 
            <CardProduct 
            urlproduct={`/${product.pseudo}/${product.pseudo}1.png`} 
            altproduct={product.title}
            title={product.title}
            subt={product.subt}
            / >
          </Link>
        );
      })}
    </div>
  );
};
export default ListaProdutos;