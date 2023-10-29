import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

export default function Paypal() {
  const paypal = useRef();
  const navigate = useNavigate(); // Import navigate

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "CAD",
                  value: 6500,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          localStorage.clear();
          navigate("/"); // Chuyển hướng về trang chủ sau khi thanh toán hoàn tất
          window.location.reload();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div className="btnpay" ref={paypal}></div>
    </div>
  );
}
