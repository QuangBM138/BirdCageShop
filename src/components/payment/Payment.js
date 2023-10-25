import React, { useEffect } from "react";
import "./Payment.css";
import List from "./List";
import { useState } from "react";
import { useStore } from "../cart/store/hooks";
import { Navigate } from "react-router";
function Payment() {
  const [isShow, setIsShow] = useState(false);
  const [state, dispatch] = useStore()

  const cart = state
  if (cart.length < 1)
    return <Navigate to="/cart" replace />;

  return (
    <div className="w-full min-h-screen">
      <div className="w-full relative">
        {/* left side */}
        <div className="w-full lg:w-[50%] flex justify-end pt-[30px]">
          <div className="w-full lg:w-[82%] lg:ml-[40px]">
            <div className="w-[80%] mx-auto flex items-center justify-between">
              <span className="font-bold text-[24px]">Contact</span>

              {/* <p className="text-[#707070] text-[14px] flex items-center">
              <span className="hidden lg:block">Have an account?</span>&nbsp;
              <span className="text-[#1773B0] underline cursor-pointer">
                Login
              </span>
            </p> */}
            </div>

            <input
              className="w-[80%] block px-2 py-3 my-4 rounded-md mx-auto border-input"
              placeholder="Phone number"
              disabled
              value="0392103381"
            />
            <div className="w-[80%] mx-auto flex items-center justify-between">
              <input
                className="w-[100%] block px-2 py-3 rounded-md border-input"
                placeholder="Full name"
                disabled
                value="Tài phiệt No Name"
              />

            </div>
            <div className="w-[80%] my-4 mx-auto flex items-center justify-between">
              <input
                className="w-[78%] block px-2 py-3 rounded-md border-input"
                placeholder="Address"
                value={"144/4 Ấp 4 xã 4 huyện 4 TP.4"}
                disabled
              />
              <div className="w-[18%] px-2 py-3 rounded-md bg-white flex justify-end">
                <span className="hover:bg-[#ff3333] block w-full text-center rounded-md bg-[#1773B0] px-2 py-3 text-white cursor-pointer buttonEdit ">
                  Edit
                </span>
              </div>
            </div>

            <div className=" w-[80%] h-[60px] mx-auto mt-5 mb-4">
              <span className="text-[17px] mt-10 mb-4">Shipping method</span>
            </div>
            <div className="w-[80%] mx-auto">
              <div className="w-full h-[50px] flex items-center justify-between px-4 rounded-md bg-[#f0f5ff] border-[1px] border-solid border-[#1773B0]">
                <span>Shipping</span>
                <span>$20.00</span>
              </div>
            </div>
            <div className="w-[80%] mx-auto mt-10">
              <p className="font-bold text-[24px]">Payment</p>


              <div className="hidden lg:block w-full hover:bg-[#ff3333] text-center rounded-md bg-[#1773B0] text-white mt-4 py-4 cursor-pointer button">
                Pay now
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="hidden lg:block absolute right-0 top-0 bg-[#f5f5f5] h-[100vh] hide-scroll overflow-y-scroll w-full lg:w-[50%] pt-[30px] border-cus">
          <div className="w-full">
            <List />
          </div>
        </div>
        <div className="block lg:hidden overflow-y-scroll w-[80%] mx-auto mt-8 lg:w-[50%] pt-[30px]">
          <div className="flex w-full items-center justify-between mb-10">
            <span>Order summary (2)</span>
            <span
              onClick={() => setIsShow(!isShow)}
              className="text-[#1773B0] showhide"
            >
              {isShow ? "Hide" : "Show"}
            </span>
          </div>
          {isShow ? (
            <List />
          ) : (
            <div className="w-full md:w-[60%] mx-auto">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[14px]">Subtotal</span>
                <span className="text-[14px] font-bold">$899.00</span>
              </div>
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[14px]">Shipping</span>
                <span className="text-[14px]">$899.00</span>
              </div>
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[17px] font-bold">Total</span>
                <span className="text-[17px] font-bold">$899.00</span>
              </div>
            </div>
          )}

          <div className="lg:hidden mt-8 block w-full hover:bg-[#ff3333] text-center rounded-md bg-[#1773B0] text-white mt-4 py-4 cursor-pointer button">
            Pay now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
