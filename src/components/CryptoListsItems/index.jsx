import React, { useState } from 'react';
import {
  Box,
  Input,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import CryptoItem from './CryptoItem/';

import useCryptoLists from '../../hooks/useCryptoLists';

const CryptoListsItems = props => {
  const [searchString, setSearchString] = useState('');
  console.log(searchString, 'searchString');

  const { filteredCurrencies } = useCryptoLists({ searchString: searchString });

  return (
    <Box w={['100%', '70%']} m={['0', '64px auto']}>
      <Input
        placeholder="e.g. bitcoin"
        value={searchString}
        width={['100%', '30%']}
        mb="32px"
        onChange={e => setSearchString(e.target.value)}
      />

      <Table variant="simple" size="sm" w="100%">
        <TableCaption>Crypto Currency Tracker</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th isNumeric>Current Price</Th>
            <Th isNumeric>Price Change (24h)</Th>
            <Th isNumeric>Price Change (%)</Th>
            <Th isNumeric>Market Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredCurrencies.map(filtered => (
            <CryptoItem key={filtered.id} filtered={filtered} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CryptoListsItems;
