import axios from 'axios';

export const getExchangeRates = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const { data } = await axios.get(ENDPOINT);
  delete data.USDT;
  return data;
};
