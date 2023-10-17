import React, { Fragment, useState } from "react";
import Roof from "./Roof";
import "./customCage.css";
import Spoke from "./Spoke";
import Door from "./Door";
import Base from "./Base";

export default function CustomCage() {
  const [inputValues, setInputValues] = useState({
    cao: "",
    rong: "",
    dai: "",
  });
  const [errors, setErrors] = useState({
    cao: "",
    rong: "",
    dai: "",
  });
  const isInputValid =
    inputValues.cao !== "" && inputValues.rong !== "" && inputValues.dai !== "";

  const handleInputChange = (fieldName, value) => {
    if (value < 30 || value > 100) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "Giá trị không hợp lệ. Vui lòng nhập từ 30 đến 100.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
    }

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [fieldName]: value,
    }));
  };
  return (
    <div className="w-[90%] m-auto mt-5">
      <div className="size">
        <div>Size:</div>
        <div className="size_chilren">
          Cao
          <input
            className="ip_custom_cage"
            value={inputValues.cao}
            type="number"
            min={30}
            max={100}
            onChange={(e) =>
              handleInputChange("cao", parseInt(e.target.value, 10))
            }
          />
          {errors.cao && <div className="error-message">{errors.cao}</div>}
        </div>
        <div className="size_chilren">
          Rộng
          <input
            className="ip_custom_cage"
            type="number"
            min={30}
            max={100}
            value={inputValues.rong}
            onChange={(e) =>
              handleInputChange("rong", parseInt(e.target.value, 10))
            }
          />
          {errors.rong && <div className="error-message">{errors.rong}</div>}
        </div>
        <div className="size_chilren">
          Dài
          <input
            className="ip_custom_cage"
            type="number"
            min={30}
            max={100}
            value={inputValues.dai}
            onChange={(e) =>
              handleInputChange("dai", parseInt(e.target.value, 10))
            }
          />
          {errors.dai && <div className="error-message">{errors.dai}</div>}
        </div>
      </div>
      <Roof isDisabled={!isInputValid} />
      <Spoke isDisabled={!isInputValid} />
      <Door isDisabled={!isInputValid} />
      <Base isDisabled={!isInputValid} />
      <div className="flex mt-5">
        <img
          className="w-[400px] rounded-lg mx-5"
          src="https://c8.alamy.com/comp/2A424WA/ornate-bird-cage-inspired-roof-design-on-grand-mansion-rooftop-2A424WA.jpg"
        />
         <img
          className="w-[400px] rounded-lg mx-5"
          src="https://img.ws.mms.shopee.vn/16ab2a14e8c180e2d06db78820156010"
        />
         <img
          className="w-[400px] rounded-lg mx-5"
          src="https://m.media-amazon.com/images/I/616r3OmI6EL.jpg"
        />
          <img
          className="w-[400px] rounded-lg mx-5"
          src="https://chimcanhvietnam.vn/images/sanpham/slider/DSCN4558.JPG"
        />
      </div>
    </div>
  );
}
