import { useState, useEffect } from 'react';
import {
  Link as ChakraLink,
  Heading,
  useColorMode,
  VStack,
  Box,
  Button,
} from '@chakra-ui/react';


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

  return (
    <>
      <VStack minHeight="150vh" bg={bgColor[colorMode]}>
        <Heading
          style={{ zIndex: 2 }}
          py={20}
          align="center"
          mt={5}
          color={textColor[colorMode]}
          fontSize="3xl"
        >
          Welcome to React
        </Heading>
        
      </VStack>
    </>
  );
};

export default Index;
