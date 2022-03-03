import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddStock}) {
  const stockCompArr = stocks.map(stocks => (
    <Stock 
      key={stocks.id}
      stocks={stocks}
      callbackFn={onAddStock}
    />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stockCompArr}
      {/* {stocks.map((stocks) => (
        <Stock 
          key={stocks.id}
          stocks={stocks}
          callbackFn={buy}
        />
      ))} */}
    </div>
  );
}

export default StockContainer;