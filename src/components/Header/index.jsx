import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

import cryptoImage from './assets/crypto.svg';
const Header = () => {
  return (
    <Flex
      direction={['column', 'row']}
      m={['32px auto', '64px auto']}
      alignItems="center"
      justifyContent={['center', 'space-between']}
    >
      <Flex direction="column" width={['100%', 'calc(100% - 450px)']}>
        <Text fontSize="2xl" mb="32px">
          Cryptohunter
        </Text>
        <Text fontSize="md">
          A cryptocurrency, crypto-currency, or crypto is a digital asset
          designed to work as a medium of exchange wherein individual coin
          ownership records are stored in a ledger existing in a form of a
          computerized database using strong cryptography to secure transaction
          records, to control the creation of additional coins, and to verify
          the transfer of coin ownership.
        </Text>
      </Flex>
      <Image
        src={cryptoImage}
        width="290px"
        alt="HeaderImage"
        display={['none', 'block']}
        backgroundSize="contain"
      />
    </Flex>
  );
};

export default Header;
