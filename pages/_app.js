import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Button,
  Heading,
  VStack,
  Flex,
} from '@chakra-ui/react';
import {
  ThemeEditorProvider,
  ThemeEditorDrawerButton,
} from '@hypertheme-editor-pro/chakra-ui';
// import { ThemeEditorDrawerButton } from '@hypertheme-editor-pro/chakra-ui';
import theme from '../theme';
import { DarkModeSwitch } from '../components/old/DarkModeSwitch';
// import DarkModeSwitch from '../components/DarkModeSwitch';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <ThemeEditorProvider>
          <ThemeEditorDrawerButton pos="fixed" bottom={4} right={2} />
          <DarkModeSwitch />
          <Component {...pageProps} />
          <div id="overlays" />
        </ThemeEditorProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
