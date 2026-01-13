import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];


  return (
    <div>
      <VideoTitle/>
      <VideoBackground/>
    </div>
  );
};
export default MainContainer;