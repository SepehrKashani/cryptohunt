import React from 'react';
import {
  Box,
  ChakraProvider,
  Flex,
  Grid,
  Image,
  Text,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import logo from './assets/logo.svg';

import CryptoListsItems from './components/CryptoListsItems';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid direction="Column" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box w={['100%', '70%']} m={['0', '32px auto']}>
            <Flex alignItems="center">
              <Image
                src={logo}
                width="40px"
                height="40px"
                alt="HeaderImage"
                backgroundSize="contain"
                mr="16px"
              />
              <Text>Cryptohunter</Text>
            </Flex>
            <Header></Header>
            <CryptoListsItems></CryptoListsItems>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
