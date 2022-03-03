import React from "react";

function Stock({stocks, callbackFn}) {

  function handleClick() {
    callbackFn(stocks.id)
  }

  return (
    <div>
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{stocks.name}</h5>
          <p className="card-text">{stocks.ticker}: ${stocks.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;