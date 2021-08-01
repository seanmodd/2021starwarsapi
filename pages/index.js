import { useState, useEffect, useCallback } from 'react';
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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


 const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
    const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong');
        }
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          }
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      } 
    catch (error) {
        setError(error.message);
      }
      setIsLoading(false);

      }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  
      let content = <Heading color={textColor[colorMode]}>Found no movies.</Heading>;

      if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
      } 
      
      if (error) {
        content = <Heading color={textColor[colorMode]}>Error</Heading>
      }
      
      if(isLoading) {
        content = <Heading color={textColor[colorMode]}>Loading...</Heading>;
      }
  return (
    <>
      <VStack minHeight="100vh" bg={bgColor[colorMode]}>
        <Heading
          py={20}
          align="center"
          color={textColor[colorMode]}
        >
          Section 14: API Creation
        </Heading>
        <Button onClick={fetchMoviesHandler}>Fetch Movies? </Button>
        <VStack pt={10}>
        {content}
        </VStack>
      </VStack>
    </>
  );
};

export default Index;
