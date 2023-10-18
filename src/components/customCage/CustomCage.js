import React, { Fragment, useState } from "react";
import Roof from "./Roof";
import "./customCage.css";
import Spoke from "./Spoke";
import Door from "./Door";
import Base from "./Base";

export default function CustomCage() {
  const [min, setMin] = useState(0)
  const [component, setComponent] = useState([])
  const [max, setMax] = useState(0)
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
    inputValues.width < inputValues.length;

  const handleInputChange = (fieldName, value) => {
    const newInputValues = {
      ...inputValues,
      [fieldName]: value,
    };
    setInputValues(newInputValues);
    if (newInputValues.height && newInputValues.width && newInputValues.length) {
      setMax(Math.floor(((inputValues.width + inputValues.length) * 2) / 1))
      setMin(Math.floor(((inputValues.width + inputValues.length) * 2) / 2))
    }
    if (fieldName === "height") {
      if (value < 30 || value > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Giá trị không hợp lệ. Vui lòng nhập từ 30 đến 100.",
        }));
        return
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
  const handleCallback = (childData) => {
    console.log(childData)
    setComponent(prev => {
      const newComponent = prev.filter(compo => compo.type != childData.type)
      const compo = [
        ...newComponent, childData
      ]

      return compo.sort((a, b) => {
        const nameA = a.type.toUpperCase(); // ignore upper and lowercase
        const nameB = b.type.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    })
  }
  console.log("DOoor", component)
  return (
    <div className="w-[90%] m-auto mt-10 p-10" style={{ border: "1px solid #ddd", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Custom your own bird cage</h1>
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
        <div className="howToOrder">
          <div className="howToOrder-item" style={{ fontWeight: 700 }}>
            Length, Width, Height (min: 30, max: 100)
          </div>
          <div className="howToOrder-item">Width must be smaller than Length</div>
          <div className="howToOrder-item">Spoke: min <p className="condition-spoke">{min}</p> max  <p className="condition-spoke">{max}</p></div>
          <div className="howToOrder-item">Door must be smaller than 4</div>
        </div>

      </div>

      <div className="component-container">
        <div>
          <Roof
            parentCallback={handleCallback} isDisabled={!isInputValid} />
          <Spoke
            parentCallback={handleCallback}
            min={min}
            max={max}
            isDisabled={!isInputValid} />
          <Door parentCallback={handleCallback} isDisabled={!isInputValid} />
          <Base parentCallback={handleCallback} isDisabled={!isInputValid} />
        </div>
        <button className="order-button">Order</button>
        <div className="component-images">
          {component.map(c =>
            <div className="component">
              <span style={{ fontFamily: "Roboto", fontWeight: 500, textTransform: "uppercase", fontSize: "20px", marginBottom: "10px" }}>{c.type}</span>
              <img className="component-image" src={c.item.image} />
            </div>)}
        </div>
      </div>


    </div>
  );
}
