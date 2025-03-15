import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>E-Commerce Store</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

