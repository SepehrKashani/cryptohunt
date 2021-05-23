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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
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
