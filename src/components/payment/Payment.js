import React, { useEffect } from "react";
import "./Payment.css";
import List from "./List";
import { useState } from "react";
import { useStore } from "../cart/store/hooks";
import { Navigate } from "react-router";
import Paypal from "./Paypal";
import { Link, useNavigate } from "react-router-dom";
import UseToken from "../handleToken/UseToken";
import jwtDecode from "jwt-decode";

function Payment() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [state, dispatch] = useStore();
  const { getToken } = UseToken()
  const [customCage, setCustomCage] = useState([])
  const [customer, setCustomer] = useState([])
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const cart = state;
  useEffect(() => {
    const userData = {
      userId: jwtDecode(getToken()).id,
      lastName,
      firstName,
      address,
      phone
    }
    fetch(`http://localhost:5000/api/v1/account/${userData.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data);
        setFirstName(data.data.customer[0].firstName);
        setLastName(data.data.customer[0].lastName);
        setAddress(data.data.customer[0].address);
        setPhone(data.data.customer[0].account[0].phoneNumber)
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("http://localhost:5000/api/v1/cage/customCages/" + jwtDecode(getToken()).id, {
      method: "GET",
      contentType: 'application/json',
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(cage => {
        const cageCustom = cage.map(i => i[0])
        if (cageCustom[0].cage[0].status === "CUS") {
          setCustomCage(cageCustom[0].cage[0])
        } else {
          setCustomCage([])
        }

      }
      )
    // get user profile
    fetch("http://localhost:5000/api/v1/account/" + jwtDecode(getToken()).id)
      .then(res => res.json())
      .then(customer => {
        setCustomer(customer.data)
      })
  }, [])


  if (cart.length < 1 && customCage) return <Navigate to="/cart" replace />;
  console.log("payment.js", customCage)
  return (
    <div className="w-full min-h-screen">
      <div className="w-full relative">
        {/* left side */}
        <div className="w-full lg:w-[50%] flex justify-end pt-[30px]">
          <div className="w-full lg:w-[82%] lg:ml-[40px]">
            <div className="w-[80%] mx-auto flex items-center justify-between">
              <span className="font-bold text-[24px]">Contact</span>
            </div>

            <input
              className="w-[80%] block px-2 py-3 my-4 rounded-md mx-auto border-input"
              placeholder="Phone number"
              disabled
              value={phone}
            />
            <div className="w-[80%] mx-auto flex items-center justify-between">
              <input
                className="w-[100%] block px-2 py-3 rounded-md border-input"
                placeholder="Full name"
                disabled
                value={firstName + " " + lastName}
              />
            </div>
            <div className="w-[80%] my-4 mx-auto flex items-center justify-between">
              <input
                className="w-[78%] block px-2 py-3 rounded-md border-input"
                placeholder="Address"
                value={address}
                disabled
              />

              <div className="w-[18%] px-2 py-3 rounded-md bg-white flex justify-end">
                <Link to={'/user'}>
                  <span className="hover:bg-[#ff3333] block w-full text-center rounded-md bg-[#1773B0] px-2 py-3 text-white cursor-pointer buttonEdit ">
                    Edit
                  </span>
                </Link>
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
          </div>
        </div>

        {/* right side */}
        <div className="hidden lg:block absolute right-0 top-0 bg-[#f5f5f5] h-[100vh] hide-scroll overflow-y-scroll w-full lg:w-[50%] pt-[30px] border-cus">
          <div className="w-full">
            <List
              customer={customer}
              customCageObject={customCage ? customCage : []} />
          </div>
        </div>
        <div className="block lg:hidden overflow-y-scroll w-[80%] mx-auto mt-8 lg:w-[50%] pt-[30px]">
          <div className="flex w-full items-center justify-between mb-10">
            <span>Order summary</span>
            <span
              onClick={() => setIsShow(!isShow)}
              className="text-[#1773B0] showhide"
            >
              {isShow ? "Hide" : "Show"}
            </span>
          </div>
          {isShow ? (
            <List customCageObject={customCage} />
          ) : (
            <div className="w-full md:w-[60%] mx-auto">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[14px]">Subtotal</span>
                <span className="text-[14px] font-bold">$</span>
              </div>
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[14px]">Shipping</span>
                <span className="text-[14px]">$</span>
              </div>
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[17px] font-bold">Total</span>
                <span className="text-[17px] font-bold">$</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Payment;
