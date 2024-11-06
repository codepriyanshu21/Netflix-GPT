
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.jsx'
import usePopularMovies from '../hooks/usePopularMovies.jsx';
import useTopRatedMovies from '../hooks/useTopRatedMovies.jsx';
import useUpComingMovies from '../hooks/useUpComingMovies.jsx';
import GptSearch from './GptSearch.jsx';
import Header from './Header.jsx'
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';

const Browse = () => {
  const showGptSearch=useSelector((store)=> store.gpt.showGptSearch);


  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header/>
      {
        showGptSearch ? (
          <GptSearch/>
        ):(
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }
      
    
    </div>
  )
}

export default Browse