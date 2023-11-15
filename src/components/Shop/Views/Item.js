import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'
import localString from '../../localization';
import { MainContext, useContext } from '../../context';

export default function Item({ item }) {

    const { lang } = useContext(MainContext);

    return (
        // <Link to={`/shop/${item.id}`} className="mainDiv" >
        //     <img className="imageSize" key={item.id} src={item.data.ProductImage} alt={item.data.ProductName} width='20%' />
        //     <div className="headerDescriptionHolder">
        //         <p className="itemHeader">
        //             {item.data.ProductName}
        //         </p>
        //         <p className="itemDescription">
        //             {item.data.ProductDescription}
        //         </p>
        //     </div>
        // </Link>

        <Link to={`/shop/${item.id}`} className="itemBox" >
            <img className="itemImage" key={item.id} src={item.data.ProductImage} alt={item.data.ProductName} />
            <div className="headerDescriptionHolder">
                {lang === "EN" ? <div> <p className="itemHeader">
                    {item.data.ProductNameEN}
                </p>
                    <p className="itemDescription">
                        {item.data.ProductDesriptionEN}
                    </p></div> : <div><p className="itemHeader">
                        {item.data.ProductName}
                    </p>
                    <p className="itemDescription">
                        {item.data.ProductDescription}
                    </p></div>}

            </div>
        </Link>
    )
}
