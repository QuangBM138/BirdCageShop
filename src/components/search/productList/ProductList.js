import React, { useEffect, useState } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './ProductList.css';
import { Products_Cage } from '../../../data/Cages';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

export default function ProductList() {

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
                  // <div
                  //   key={pro.id}
                  //   style={{
                  //     background: "#0000000d",
                  //     textAlign: "center",
                  //     position: 'relative'
                  //   }}
                  //   className="_product p-4">
                  //   <Link to={`/detail/${pro.id}`}>
                  //     <div className='product_list_cards'>
                  //       <div>
                  //         {JSON.parse(pro.images).map(img =>
                  //           <img className='product_list_cards_img' src={img} alt={`Image ${index}`} />
                  //         )}
                  //       </div>
                  //       <div className='product_list_cards_overlay'></div>
                  //     </div>
                  //   </Link>

                  //   <div className="product_list_cards_overlay_frame">
                  //     <div className='product_list_cards_title'>
                  //       <h4 className="h4_product_list_cards">{pro.name.slice(0, 30) + "..."}</h4>
                  //       <div className='product_list_cards_prices'>
                  //         <h3>${pro.price}</h3>
                  //       </div>
                  //       <div className="product_list_cards_overlay_frame">
                  //         <button className='button_list_design'>
                  //           <ShoppingBasketIcon /> Add to Cart
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </div>




                  //   {/* Add more product details here */}
                  // </div>
                  <div className='product-wrapper'>

                    <Link to={`/detail/${pro.id}`}>
                      {JSON.parse(pro.images).map((img, index) => index == 0 && <img
                        className='image-product'
                        src={img} />)}
                      <div className='overlay-product'></div>
                    </Link>
                    <div className='show-block'>
                      <Link to={`/detail/${pro.id}`}>
                        <p className='name-product'>{pro.name}</p>
                      </Link>

                      <button
                        className='button-cart'
                      // onClick={() => (pro.id)}
                      >
                        <ShoppingBasket /> Add to Cart
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