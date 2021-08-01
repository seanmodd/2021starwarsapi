import { useColorMode, Switch } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      style={{ zIndex: '9999' }}
      color="black"
      // backgroundColor="black"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
