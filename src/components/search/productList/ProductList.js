import React, { useEffect, useState } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './ProductList.css';
import { Products_Cage } from '../../../data/Cages';
import { Link } from 'react-router-dom';
import { useStore } from '../../cart/store/hooks';
import { actions } from '../../cart/store';
import { useLocation } from 'react-router-dom';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

export default function ProductList() {
  const [state, dispatch] = useStore()
  //handle search
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  const filteredProducts = Products_Cage.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //format image
  const regx = /:\[\d{3},\d{3}]/g;
  const regxQuotes = /(\"{|\\|}")/g;
  const regxCurlyBraces = /(\{)/g;
  const regxCurlyBraces2 = /(\})/g;

  const newPro = Products_Cage.map(product => {
    console.log(product.images);

    // Replace ':[' and ']' with an empty string
    product.images = product.images.replace(regx, '');

    // Replace '\"{' and '}' with '[' and ']'
    product.images = product.images.replace(regxQuotes, '[').replace(regxCurlyBraces2, ']');

    // Replace '{' with '[' and '}' with ']'
    product.images = product.images.replace(regxCurlyBraces, '[').replace(regxCurlyBraces2, ']');

    console.log("product.images:" + product.images);

    return product;
  });

  console.log(newPro);


  const handleAddToCart = (index) => {
    dispatch(actions.addToCart({ index, quantity: 1 }))
  }


  return (
    <div>
      <div>
        {filteredProducts.length === 0 ? (
          <div style={{
            height: '720px',
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            paddingTop: '50px',
            fontSize: '24px',
            color: 'gray',
            fontStyle: 'italic',
          }}>
            No products found.
          </div>

        ) : (
          <ul>
            <div
              style={{ background: "#fff" }}
              className="container-pl py-8 mx-auto">
              <div
                className="grid -m-1 grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-5">
                {filteredProducts.map((pro, index) => (
                  <div className='product-wrapper'>
                    <Link to={`/detail/${pro.id}`}>
                      {JSON.parse(pro.images).map((img, index) => index == 0 && <img
                        className='image-product'
                        src={img} />)}
                      <div className='overlay-product'></div>
                    </Link>
                    <div className='show-block'>
                      <Link to={`/detail/${pro.id}`} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h4 className="h4_product_list_cards name-product">{pro.name.slice(0, 30) + "..."}</h4>
                        <p className='name-product'>{pro.price}</p>
                      </Link>
                      <button
                        className='button-cart'
                        onClick={() => handleAddToCart(pro.id)}
                      >
                        <ShoppingBasketIcon /> Add to Cart
                      </button>

                    </div>

                  </div>

                ))}
              </div>

            </div>
          </ul>
        )}
      </div>
    </div>
  )
}