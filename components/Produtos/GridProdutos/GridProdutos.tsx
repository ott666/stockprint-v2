// import ListaProdutos
import produtosData from "@/data/products.json";
import CardProduct  from "@/components/Produtos/CardProduct/CardProduct";
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
    w-full relative
    p-2 
    flex flex-wrap justify-center xl:justify-between  
    gap-y-0 mm:gap-y-7 xl:gap-y-4
    gap-x-10 lg:gap-x-0
    `}>
      {/* map through all the filtered ListaProdutos */}
      {filteredMoviesByGenre.map((product) => {
       
        return (
          <Link className={` md:w-[50%] xl:w-[32%]`} href={`/produtos/${product.genre}/${product.pseudo}`} key={product.pseudo}> 
            <CardProduct 
            urlproduct={`/${product.pseudo}/${product.pseudo}1.png`} 
            altproduct={product.title}
            title={product.title}
            subtitle={product.subt}
            subtitle2={product.subt2}
            bgColor="#ffffff"
            / >
          </Link>
        );
      })}
    </div>
  );
};
export default ListaProdutos;