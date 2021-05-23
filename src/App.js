import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import CryptoListsItems from './components/CryptoListsItems';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid direction="Column" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box>
            <h1>Crypto Hunter</h1>
            <Header></Header>
            <CryptoListsItems></CryptoListsItems>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
