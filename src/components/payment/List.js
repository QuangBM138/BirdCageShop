import React from "react";
import "./Payment.css";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from '../cart/store/hooks'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function List() {
  const [state, dispatch] = useStore()
  const cart = state
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(20);
  const [open, setOpen] = useState(true);
  const [list, setList] = useState([])
  const [overStockCages, setOverStockCages] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    setList([])
    // cart.forEach(element => {
    //   fetch("http://localhost:5000/api/v1/cage/" + element.cage._id)
    //     .then(res => res.json())
    //     .then(res => setList(prev => [...prev, { cage: res.data.component, cartQuantity: element.cartQuantity }]))
    // });
    Promise.all(
      state.map(item =>
        new Promise(res =>
          res(fetch("http://localhost:5000/api/v1/cage/" + item.cage._id))
        )
          .then(res => res.json())
          .then(data => {
            setList(prev => [...prev, { cage: data.data.component, cartQuantity: item.cartQuantity }])

            return ({ data: data, cartQuantity: item.cartQuantity })
          })
      )
    )
      .then(res => {
        const overStockList = res.filter(item => item.cartQuantity > item.data.data.component.inStock)
        setTimeout(() => {
          setOverStockCages(overStockList)
          setOpen(false)
          if (overStockList.length !== 0) navigate('/cart')
        }, 3000)

      })
  }, []);

  useEffect(() => {
    computeSubTotal()
  }, [list])

  const computeSubTotal = () => {
    let tmp = 0;
    list.map((i) => {
      tmp = tmp + Number.parseInt(i.cage.price * i.cartQuantity);
    });
    setSubTotal(tmp);
  };


  return (
    <div className="w-full lg:absolute lg:right-[75px]">
      {open ? <div>

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <div className='box-loading-check'>
            <Button>Processing</Button>
            <CircularProgress color="inherit" />

          </div>

        </Backdrop>
      </div> :
        <><div className="w-full mx-auto md:w-[60%] flex flex-col items-center">
          {/* item */}
          {list.map((i) => (

            <div
              key={i.cage?._id}
              className="w-full flex justify-between items-center rounded-lg mb-5"
            >
              {console.log(i)}
              <div className="flex items-center w-[80%]">
                <div className="w-[64px] rounded-lg  h-[64px] relative">
                  <span className="absolute rounded-full text-center text-white top-[-10px] right-[-10px] w-[20px] bg-[#666] h-[20px] z-10">
                    {i?.cartQuantity}
                  </span>
                  <div className="absolute top-0 left-0 overflow-hidden w-[64px] h-[64px] border-i rounded-lg">
                    <img
                      className="w-full h-full object-contain"
                      src={(i.cage?.imagePath)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-3 w-[70%]">
                  <p
                    className="leading-5 text-[14px] truncate-cus"
                    title={i.cage?.name}
                  >
                    {i.cage?.name}
                  </p>
                </div>
              </div>
              <div className="text-[14px] w-[15%] text-right">${i.cage?.price * i.cartQuantity}</div>
            </div>
          ))}
        </div>
          <div className="w-full md:w-[60%] mx-auto">
            <div className="w-full flex items-center justify-between mb-2">
              <span className="text-[14px]">Subtotal</span>
              <span className="text-[14px] font-bold">${subTotal}</span>
            </div>
            <div className="w-full flex items-center justify-between mb-2">
              <span className="text-[14px]">Shipping</span>
              <span className="text-[14px]">${shipping}</span>
            </div>
            <div className="w-full flex items-center justify-between mb-2">
              <span className="text-[17px] font-bold">Total</span>
              <span className="text-[17px] font-bold">${subTotal + shipping}</span>
            </div>
          </div></>
      }

    </div>
  );
}

export default List;
