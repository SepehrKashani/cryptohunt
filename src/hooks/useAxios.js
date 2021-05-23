// useAxios hook

import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [body, headers, method, url]);

  return { error, loading, response };
};

export default useAxios;
