import React, { useRef } from 'react';
import {
  Button,
  Heading,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import classes from './AddMovie.module.css';

function AddMovie(props) {
//! this is just for dark mode...
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'lightgreen',
    dark: 'lightblue',
  };
  const textColor = {
    light: 'white',
    dark: 'black',
  };
//!
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <VStack pb={20}>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <Heading size='small' color={textColor[colorMode]}>
          Title
        </Heading>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <Heading size='small' color={textColor[colorMode]}>
          Opening Text
        </Heading>
        <textarea rows='5' id='opening-text' ref={openingTextRef} />
      </div>
      <div className={classes.control}>
        <Heading size='small' color={textColor[colorMode]}>
          Release Date
        </Heading>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button style={{ backgroundColor: bgColor[colorMode], borderRadius: '15px', padding: '10px'}} >Add Movie</button>
    </form>
    </VStack>
  );
}

export default AddMovie;
