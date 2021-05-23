import { useState, useMemo } from 'react';
import useAxios from './useAxios';

const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const useCryptoLists = (options = {}) => {
  const { searchString } = options;
  const { response, loading, error } = useAxios({
    url: url,
    method: 'get',
  });

  const responseArray = response || [];

  const filteredCurrencies = responseArray.filter(res => {
    return res.name.toLowerCase().includes(searchString.toLowerCase());
  });

  const hasFilteredCurrencies = !!filteredCurrencies.length;

  return {
    filteredCurrencies,
    hasFilteredCurrencies,
  };
};

export default useCryptoLists;
