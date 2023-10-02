import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './ProductList.css'


export default function ProductList() {

  const images = [
    "https://salt.tikicdn.com/cache/w1200/ts/product/c6/eb/aa/17b3a771c675d3eac1619dadbe05b7c7.jpg",
    "https://www.dogfood.com.my/wp-content/uploads/2022/03/daily-diet-dog-food-1.jpg",
    "https://www.petfoodchina.com/data/watermark/20210224/6035afdc9ebd9.jpg",
    "https://catit.ca/wp-content/uploads/2019/07/Chicken-Dinners_product-1_CA_Woocommerce.jpg",
    "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg",
    "https://unisa.edu.au/siteassets/media-centre/images/media-release-images/2023/-pig_500-x-500-resized.jpg",
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg",
    "https://salt.tikicdn.com/cache/w1200/ts/product/c6/eb/aa/17b3a771c675d3eac1619dadbe05b7c7.jpg",
    "https://www.dogfood.com.my/wp-content/uploads/2022/03/daily-diet-dog-food-1.jpg",
    "https://www.petfoodchina.com/data/watermark/20210224/6035afdc9ebd9.jpg",
    "https://catit.ca/wp-content/uploads/2019/07/Chicken-Dinners_product-1_CA_Woocommerce.jpg",
    "https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/09012023/TH-Whiskas-Tuna-Flavour-Cat-Food-3kg-Front-View.jpg",
    "https://unisa.edu.au/siteassets/media-centre/images/media-release-images/2023/-pig_500-x-500-resized.jpg",
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg",
  ];

  return (
    <div>
      <div
        style={{ background: "#fff" }}
        className="container-pl py-8 mx-auto">
        <div
          className="grid -m-1 grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-5">
          {images.map((img, index) => (
            <div
              style={{
                background: "#0000000d",
                textAlign: "center"

              }}
              className="_product p-4">
              <div className='product_list_cards'>
                <img className='product_list_cards_img' src={img} alt={`Slide ${index}`} />
                <div className='product_list_cards_overlay'>
                  <div className="product_list_cards_overlay_frame">
                    <div className='product_list_cards_title'>
                      <h4 className="h4_product_list_cards">Adult Dogs Pedigree</h4>
                    </div>
                  </div>
                  <div className="product_list_cards_overlay_frame">
                    <div className='product_list_cards_prices'>
                      <h3>$350.00</h3>
                    </div>
                  </div>
                  <div className="product_list_cards_overlay_frame">
                    <button className='button_list_design'>
                      <ShoppingBasketIcon /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
