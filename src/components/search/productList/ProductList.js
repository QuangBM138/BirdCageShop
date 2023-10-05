import React, { useState } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './ProductList.css';
import { Products } from '../../../data/Products';
import { Link } from 'react-router-dom';


export default function ProductList() {

  const regx = /:\[\d{3},\d{3}]/g;
  const regxQuotes = /(\"{|\\|}")/g;
  const regxCurlyBraces = /(\{)/g;
  const regxCurlyBraces2 = /(\})/g;

  const newPro = Products.map(product => {
    console.log(product.images);

    // Replace ':[' and ']' with an empty string
    product.images = product.images.replace(regx, '');

    // Replace '\"{' and '}' with '[' and ']'
    product.images = product.images.replace(regxQuotes, '[').replace(regxCurlyBraces2, ']');

    // Replace '{' with '[' and '}' with ']'
    product.images = product.images.replace(regxCurlyBraces, '[').replace(regxCurlyBraces2, ']');

    console.log("product.images:"+ product.images);

    return product;
  });

  console.log(newPro);



  return (
    <div>
      <div
        style={{ background: "#fff" }}
        className="container-pl py-8 mx-auto">
        <div
          className="grid -m-1 grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-5">
          {Products.map((pro, index) =>
            <div
            key={index}
              style={{
                background: "#0000000d",
                textAlign: "center"
              }}
              className="_product p-4">
                <Link  to={`/detail/${index}`}>
              <div className='product_list_cards'>
                <div>
                  {JSON.parse(pro.images).map(img =>
                    <img className='product_list_cards_img' src={img} alt={`Image ${index}`} />
                  )}
                </div>
                <div className='product_list_cards_overlay'>
                  <div className="product_list_cards_overlay_frame">
                    <div className='product_list_cards_title'>
                      <h4 className="h4_product_list_cards">{pro.name.slice(0,30) + "..."}</h4>
                    </div>
                  </div>
                  <div className="product_list_cards_overlay_frame">
                    <div className='product_list_cards_prices'>
                      <h3>${pro.price}</h3>
                    </div>
                  </div>
                  <div className="product_list_cards_overlay_frame">
                    <button className='button_list_design'>
                      <ShoppingBasketIcon /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}