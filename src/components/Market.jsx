import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "../Coin";

function Market() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='market'>
      <div className='market__search'>
        <h1 className='market__title'>Search a currency</h1>
        <form action=''>
          <input
            type='text'
            placeholder='Search'
            className='market__input'
            onChange={handleChange}
          />
        </form>
      </div>
      <div className='coin-title__container'>
        <div className='coin-title__row'>
          <div className='coin-title__currency'>
            <h1>Coin</h1>
          </div>
          <div className='coin-title__data'>
            <p className='coin-title__price'>Price</p>
            <p>24 Hour Change</p>
            <p className='coin-title__marketcap'>Market Cap</p>
          </div>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.market_cap_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default Market;
