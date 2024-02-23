const Coin = ({ image, name, symbol, price, priceChange, marketcap }) => {
  return (
    <div className='coin'>
      <div className='coin__container'>
        <div className='coin__row'>
          <div className='coin__img-container'>
            <img src={image} alt='crypto' className='coin__img' />
          </div>
          <p className='coin__name'>{name}</p>
          <p className='coin__symbol'>{symbol}</p>
          <p className='coin__price'>${price.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coin__percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin__percent green'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='coin__marketcap'>${marketcap.toLocaleString()}</p>
        </div>
        {/* <div className='coin__currency'></div> */}
        {/* <div className='coin__data'></div> */}
      </div>
    </div>
  );
};
export default Coin;
