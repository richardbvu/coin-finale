import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";

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
    <div className='market' id='market'>
      <div className='market__container'>
        <div className='market__search'>
          <label for='market__input' className='market__search-title'>
            Search Currency
          </label>
          <form action=''>
            <input
              id='market__input'
              name='market__input'
              type='text'
              placeholder='Search'
              className='market__input'
              onChange={handleChange}
            />
          </form>
        </div>
        <div className='market-heading__container'>
          <div className='market-heading__row'>
            <p className='market-heading__coin'>Coin</p>
            <p className='market-heading__name'>Name</p>
            <p className='market-heading__abbrev'>Abbrev.</p>
            <p className='market-heading__price'>Price</p>
            <p className='market-heading__24hour'>24 Hour</p>
            <p className='market-heading__marketcap'>Market Cap</p>
          </div>
          {/* <div className='coin-title__currency'></div>
          <div className='coin-title__data'></div> */}
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
    </div>
  );
}

export default Market;
