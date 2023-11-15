import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import './Shop.css';
import Item from './Views/Item';

function Shop() {

  const [products, setProducts] = useState([]);
  const showableProducts = [];

  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => setProducts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })
      )
    ))
  }, [])

  for (let i = 0; i < products.length; i++) {
    if (products[i].data.ProductName != "") {
      showableProducts.push(
        <Item item={products[i]} />
      )
    }
  }

  return (
    <div className="grid">
      {showableProducts}
    </div>
  );
}

export default Shop;
