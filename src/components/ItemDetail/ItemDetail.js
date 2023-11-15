import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import { NavLink } from "react-router-dom";
import './ItemDetail.css';
import UndefinedProduct from '../img/UndefinedProduct.png'
import { MainContext, useContext } from '../context';

function ItemDetail({ match }) {

  const { lang } = useContext(MainContext);

  const [item, setItem] = useState({});
  const [isValid, setIsValid] = useState(0);
  const [imagesState, setImagesState] = useState([])

  let images = []

  const fetchItem = async () => {
    db.collection("Products").doc(match.params.id).get()
      .then(snapshot => {
        if (snapshot.exists) {
          setItem(snapshot.data())
          for (let i = 0; i < snapshot.data().ProductOtherImages.length; i++) {
            images.push({ "url": snapshot.data().ProductOtherImages[i] })
          }
          setIsValid(1);
          setImagesState(images)

        }
        else {
          setIsValid(2)
        }
      })
  }
  useEffect(() => {
    fetchItem();

  }, [])


  if (isValid == 1) {

    return (
      <div className="mainWindow">
        <div className="imageHeaderHolder">
          <img className='responsiveImage' src={item.ProductImage} alt={item.ProductName} />
     
          {lang === "EN" ? <p className="productHeader">{item.ProductNameEN}</p> : <p className="productHeader">{item.ProductName}</p>}


        </div>
        {lang === "EN" ? <p className="productDescription">{item.ProductDesriptionEN}</p> : <p className="productDescription">{item.ProductDescription}</p>}

      </div>
    );
  }
  else if (isValid == 2) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img style={{ width: '30%', marginTop: '5%' }} src={UndefinedProduct} />
        <NavLink className='backButton' to="/" exact>Geri Dön</NavLink>
      </div>
    )
  }
  else {
    return (
      <div>

      </div>
    )
  }
}

export default ItemDetail;
