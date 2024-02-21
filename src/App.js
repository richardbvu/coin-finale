import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
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

  // const filteredCoins = coins.filter;

  return (
    <div className='market'>
      <div className='market__search'>Search a currency</div>
      <form action=''>
        <input
          type='text'
          placeholder='Search'
          className='market__input'
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
