import { useEffect, useState } from "react";
import TitlecardComp from "./reusable/TitlecardComp";
import { fetchMovies } from "../service/mApi";
import MovieListLodingComp from "./reusable/MovieListLodingComp";

interface ITitleCards {
  mtitle?: string,
  category?: string
}


function TitleCards({ mtitle, category }: ITitleCards) {


  const [movieList, SetmovieList] = useState<any[]>([])
  const [loaidngState, SetloaidngState] = useState(true)


  useEffect(() => {
    const fetchMovielist = async () => {
      try {
        const data = await fetchMovies(category);
        SetmovieList(data.results)


      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        SetloaidngState(false)
      }
    }
    fetchMovielist()
  }, [])

  console.log(movieList);



  return (
    <div className="pl-5 ">
      <h1 className="text-xl mt-5 font-medium">{mtitle}</h1>
      <div className="flex overflow-x-scroll popular  gap-5 mt-5 ">
        {loaidngState ?
          <MovieListLodingComp />
          : movieList.map((item, index) => (
            <div key={index} className="">
              <TitlecardComp
                id={item.id}
                image={item.backdrop_path}
                title={item.original_title}
              />
            </div>

          ))}
      </div>
    </div>

  );
}

export default TitleCards;
