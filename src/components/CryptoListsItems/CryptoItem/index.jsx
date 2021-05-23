import React from 'react';
import { Image, Td, Tr } from '@chakra-ui/react';

const CryptoItem = props => {
  const {
    filtered: {
      current_price,
      id,
      image,
      market_cap,
      name,
      price_change_24h,
      price_change_percentage_24h,
      symbol,
    },
  } = props;

  const isPriceChanged = price_change_24h > 0 ? '#48BB78' : '#E53E3E';

  return (
    <Tr>
      <Td>
        <Image borderRadius="full" h="40px" w="40px" src={image} alt={id} />
      </Td>

      <Td fontWeight="bold">{` ${name} - ${symbol.toUpperCase()}`}</Td>

      <Td isNumeric>${current_price.toLocaleString()}</Td>

      <Td isNumeric color={isPriceChanged}>
        {price_change_24h.toLocaleString()}
      </Td>

      <Td isNumeric>{price_change_percentage_24h.toFixed(2)}%</Td>

      <Td isNumeric>${market_cap.toLocaleString()}</Td>
    </Tr>
  );
};

export default CryptoItem;
