import React, { Fragment, useState } from "react";
import Roof from "./Roof";
import "./customCage.css";
import Spoke from "./Spoke";
import Door from "./Door";
import Base from "./Base";

export default function CustomCage() {
  const [inputValues, setInputValues] = useState({
    height: "",
    width: "",
    length: "",
  });
  const [errors, setErrors] = useState({
    height: "",
    width: "",
    length: "",
  });
  const isInputValid =
    inputValues.height !== "" &&
    inputValues.width !== "" &&
    inputValues.length !== "" &&
    inputValues.height >= 30 &&
    inputValues.height <= 100 &&
    inputValues.width >= 30 &&
    inputValues.width <= 100 &&
    inputValues.length >= 30 &&
    inputValues.length <= 100 &&
    inputValues.height < inputValues.length;

  const handleInputChange = (fieldName, value) => {
    const newInputValues = {
      ...inputValues,
      [fieldName]: value,
    };
    setInputValues(newInputValues);

    if (fieldName === "height") {
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
    }

    if (fieldName === "width") {
      if (value < 30 || value > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Giá trị không hợp lệ. Vui lòng nhập từ 30 đến 100.",
        }));
      } else if (value >= newInputValues.length) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Width phải nhỏ hơn Length.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "",
        }));
      }
    }
    if (fieldName === "length") {
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
        if (newInputValues.width >= value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            width: "Width phải nhỏ hơn Length.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            width: "",
          }));
        }
      }
    }
  };

  return (
    <div className="w-[90%] m-auto mt-5">
      <div className="size">
        <div>Size:</div>
        <div className="size_chilren">
          <span> Height</span>
          <input
            className="ip_custom_cage"
            value={inputValues.height}
            type="number"
            min={30}
            max={100}
            onChange={(e) =>
              handleInputChange("height", parseInt(e.target.value, 10))
            }
          />
          {errors.height && (
            <div className="error-message" style={{ fontSize: "13px", color: "red" }}>{errors.height}</div>
          )}
        </div>
        <div className="size_chilren">
          <span> Width</span>
          <input
            className="ip_custom_cage"
            type="number"
            min={30}
            max={100}
            value={inputValues.width}
            onChange={(e) =>
              handleInputChange("width", parseInt(e.target.value, 10))
            }
          />
          {errors.width && <div className="error-message" style={{ fontSize: "13px", color: "red" }}>{errors.width}</div>}
        </div>
        <div className="size_chilren">
          <span>Length</span>
          <input
            className="ip_custom_cage"
            type="number"
            min={30}
            max={100}
            value={inputValues.length}
            onChange={(e) =>
              handleInputChange("length", parseInt(e.target.value, 10))
            }
          />
          {errors.length && (
            <div className="error-message" style={{ fontSize: "13px", color: "red" }}>{errors.length}</div>
          )}
        </div>
      </div>
      <div className="flex">
        <div>
          <Roof isDisabled={!isInputValid} />
          <Spoke isDisabled={!isInputValid} />
          <Door isDisabled={!isInputValid} />
          <Base isDisabled={!isInputValid} />
        </div>
        <div className="flex flex-col justify-center w-[300px] h-[200px] mt-3 ml-10 items-center">
          <div>
            <div>
              <text>Length, width, height(min: 30, max: 100)</text>
            </div>
            <div>Height &lt; Length</div>
            <div>Spoke: min 30, max 100</div>
            <div>Door &lt;= 4</div>
          </div>
        </div>
      </div>

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
