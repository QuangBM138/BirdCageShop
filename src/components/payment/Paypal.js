import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { useStore } from "../cart/store/hooks";
import Alert from '@mui/material/Alert';
export default function Paypal({ total, customCageObject, customer }) {
  console.log("Paypal.js", customCageObject)
  console.log("Paypal.js", customer.customer[0])
  const paypal = useRef();
  const navigate = useNavigate(); // Import navigate
  const [state, dispatch] = useStore()
  const [noAddress, setNoaddress] = useState(false)
  const cageArray = state.map(cart => ({ cageId: cart.cage._id, quantity: cart.cartQuantity, price: cart.cage.price, isCustom: false }))
  useEffect(() => {


    if (!customer.customer[0].address) {
      setNoaddress(true)
    } else {
      setNoaddress(false)
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Cool looking table",
                  amount: {
                    currency_code: "USD",
                    value: 1,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            fetch("http://localhost:5000/api/v1/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify
                (
                  {
                    status: "Processing",
                    paymentDate: new Date().toLocaleDateString('en-ZA'),
                    customerId: [customer.customer[0]._id],
                    address: customer.customer[0].address,
                    total: total,
                    shipFee: 20,
                    cageArray: customCageObject.length === 0 ? cageArray : [...cageArray, { cageId: customCageObject._id, quantity: 1, price: customCageObject.price, isCustom: true }]
                  }
                )
            })
              .then(res => console.log("create order"))
            // console.log(order);
            // localStorage.clear();
            // navigate("/"); // Chuyển hướng về trang chủ sau khi thanh toán hoàn tất
            // window.location.reload();
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }

  }, []);

  return (
    <div>
      {noAddress && <Alert severity="warning">Please fill address</Alert>}
      <div className="btnpay" ref={paypal}></div>
    </div>
  );
}
