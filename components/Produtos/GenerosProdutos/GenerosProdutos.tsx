// 1. import the data
import products from '@/data/products.json'

// 2. the selected genre will be coming from a container component.
type Props = {
  selectedGenre: string;
  onSelect(genre: string): void;
};

const GenerosProdutos = ({ selectedGenre, onSelect }: Props) => {
  //3. lines 11-12 - get all the unique genres from the movie list
  const splitGenres = products.flatMap((produto) => produto.genre.split("|"));
  const genres = Array.from(new Set(splitGenres));

  return (
    
      
      <ul className='font-sans font-bold  flex w-full justify-between p-[15px] bg-primaryBlue mt-[30px] rounded-xl'>
        {/* "All" for no filter */}
        <li
          className={!selectedGenre ? "bg-indigo-50 text-secondaryBlue p-2 rounded-md" : "text-white p-2 hover:text-yellow-400"}
          onClick={() => onSelect("")}
        >
          <a className="cursor-pointer capitalize text-3xl">
            Todos
          </a>
        </li>
        {/* map through all genres */}
        {genres.map((genre, i) => {
          const isSelected = genre === selectedGenre;
          return (
            <li
              key={i}
              // use a different class if the genre is selected.
              className={isSelected ? "bg-indigo-50 text-secondaryBlue p-2 rounded-md" : "text-white p-2 hover:text-yellow-400"}
              // attach the onSelect handler
              onClick={() => onSelect(genre)}
            >
              <a className={`cursor-pointer capitalize text-3xl `}>
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
  
   
  );
};
export default GenerosProdutos