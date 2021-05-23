import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

import cryptoImage from './assets/crypto.svg';
const Header = () => {
  return (
    <Flex
      w={['100%', '70%']}
      direction={['column', 'row']}
      m={['32px', '64px auto']}
      alignItems="center"
    >
      <Flex
        direction="column"
        justifyContent={['center', 'space-between']}
        width={['100%', 'calc(100% - 450px)']}
      >
        <Text fontSize="2xl" mb="32px">
          CryptoHunter
        </Text>
        <Text fontSize="md">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Text>
      </Flex>
      <Image
        borderRadius="full"
        src={cryptoImage}
        width={['40%', '350px']}
        alt="HeaderImage"
        backgroundSize="contain"
      />
    </Flex>
  );
};

export default Header;
