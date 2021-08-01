import { useState, useEffect } from 'react';
import {
  Button,
  Heading,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import MoviesList from '../components/MoviesList';

const Index = () => {
  //! this is just for dark mode...
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'black',
    dark: 'white',
  };
  const textColor = {
    light: 'white',
    dark: 'black',
  };
  //!



  const [movies, setMovies] = useState([])

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => {
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          }
        });
        setMovies(transformedMovies);
      });
  }
  return (
    <>
      <VStack minHeight="100vh" bg={bgColor[colorMode]}>
        <Heading
          py={20}
          align="center"
          color={textColor[colorMode]}
        >
          Welcome to React
        </Heading>
        
        <Button onClick={fetchMoviesHandler}>Fetch Movies? </Button>
        <MoviesList movies={movies} />
      </VStack>
    </>
  );
};

export default Index;
