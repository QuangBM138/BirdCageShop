import React, { useEffect, useState } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './ProductList.css';
import { Products_Cage } from '../../../data/CagesNewest';
import { Link, useSearchParams } from 'react-router-dom';
import { useStore } from '../../cart/store/hooks';
import { actions } from '../../cart/store';
import { useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
export default function ProductList() {
  const [state, dispatch] = useStore()
  const [listSearch, setListSearch] = useState([])
  const [pageParam, setPageParam] = useSearchParams()
  const searchQuery = pageParam.get('query');
  const pageQuery = pageParam.get('page')
  const [totalPage, setTotalPage] = useState(1)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/api/v1/cage/searchName?page=${pageQuery ? pageQuery : 1}&limit=8`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: searchQuery })
    })
      .then(res => res.json())
      .then(res => {
        setListSearch(res.data.component)
        setTimeout(() => setLoading(false), 500)

      })
  }, [pageQuery])
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/cage/searchName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: searchQuery })
    })
      .then(res => res.json())
      .then(res => setTotalPage(res.data.component.length))
  }, [searchQuery])

  const handleAddToCart = (index) => {
    dispatch(actions.addToCart({ index, quantity: 1 }))
  }
  const handleChangePage = (event, page) => {
    // setCurrentPage(page)
    setPageParam({
      query: searchQuery,
      "page": page
    })
  }

  return (
    <div>

      <div>
        {listSearch.length === 0 ? (
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
              style={{ background: "#fff", minHeight: "100vh" }}
              className="container-pl py-8 mx-auto"

            >
              <div
                className="grid -m-1 grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-5">
                {loading ?
                  <>
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                    <Skeleton style={{ background: '#efefef', transform: "scale(0.9)" }} variant="rounded" width={"100%"} height={360} />
                  </>
                  : <>
                    {listSearch.map((pro, index) => (
                      <div className='product-wrapper' key={pro._id}>
                        <Link to={`/detail/${pro._id}`}>
                          <img
                            className='image-product'
                            src={pro.imagePath} />
                          <div className='overlay-product'></div>
                        </Link>
                        <div className='show-block'>
                          <Link to={`/detail/${pro._id}`} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h4 className="h4_product_list_cards name-product">{pro.name.slice(0, 30) + "..."}</h4>
                            <p className='name-product'>{pro.price}$</p>
                          </Link>
                          <button
                            className='button-cart'
                            onClick={() => handleAddToCart(pro._id)}
                          >
                            <ShoppingBasketIcon /> Add to Cart
                          </button>

                        </div>

                      </div>

                    ))}

                  </>
                }


              </div>
              <Pagination
                style={{ marginTop: "40px", display: "flex", justifyContent: 'center' }}
                count={Math.ceil(totalPage / 8)}
                disabled={loading}
                variant="outlined"
                page={Number(pageQuery ? pageQuery : 1)}
                color="primary"
                onChange={handleChangePage} />
            </div>
          </ul>
        )}
      </div>
    </div>
  )
}