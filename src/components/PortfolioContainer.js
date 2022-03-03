import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onRemoveStock}) {
  const portfolioCompArr = stocks.map(stocks => (
    <Stock 
      key={stocks.id}
      stocks={stocks}
      callbackFn={onRemoveStock}
    />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioCompArr}
      {/* {stocks.map((stocks) => (
        <Stock 
          key={stocks.id}
          stocks={stocks}
          callbackFn={sell}
        />
      ))} */}
    </div>
  );
}

export default PortfolioContainer;