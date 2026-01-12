import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
 const dispatch = useDispatch();
 const getNowPlayingMovies = async () => {
 const data = await fetch ("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
 const json = await data.json();

 dispatch(addNowPlayingMovies(json.results));
 };


 useEffect(()=>{
   getNowPlayingMovies();
 },[])
  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;