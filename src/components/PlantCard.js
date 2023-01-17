import React, { useState } from "react";

function PlantCard({ price, image, name }) {

  const [stock, setStock] = useState(true)

  function handleStockSelection(){
    setStock(!stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={handleStockSelection} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockSelection}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
