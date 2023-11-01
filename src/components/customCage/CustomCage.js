import React, { Fragment, useEffect, useRef, useState } from "react";
import Roof from "./Roof";
import "./customCage.css";
import Spoke from "./Spoke";
import io from "socket.io-client"
import Door from "./Door";
import Base from "./Base";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import UseToken from "../handleToken/UseToken"
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
const socket = io.connect("http://localhost:5000")
export default function CustomCage() {
  const [min, setMin] = useState(0)
  const warningOrderSubmit = useRef()
  const [component, setComponent] = useState([])
  const [total, setTotal] = useState(0)
  const [max, setMax] = useState(0)
  const [validDoor, setValidDoor] = useState(false)
  const [doorList, setDoorList] = useState([])
  const [baseList, setBaseList] = useState([])
  const [spokeList, setSpokeList] = useState([])
  const [roofList, setRoofList] = useState([])
  const [validSpoke, setValidSpoke] = useState(true)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const { getToken } = UseToken()
  const [inputValues, setInputValues] = useState({
    height: "",
    width: "",
    length: "",
  });
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/component")
      .then(res => res.json())
      .then(res => {
        console.log(res.data.components)
        res.data.components.forEach(element => {
          if (element.name.split(" ")[0] === "Spoke") {

            setSpokeList(prev => [...prev, element])
          }
          if (element.name.split(" ")[0] === "Door") setDoorList(prev => [...prev, element])
          if (element.name.split(" ")[0] === "Base") setBaseList(prev => [...prev, element])
          if (element.name.split(" ")[0] === "Roof") setRoofList(prev => [...prev, element])
        });

      })
  }, [])

  console.log(doorList, baseList, roofList, spokeList);
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
    setInputValues(prev => {
      if (newInputValues.height && newInputValues.width && newInputValues.length) {
        setMax(Math.floor(((newInputValues.width + newInputValues.length) * 2) / 1))
        setMin(Math.floor(((newInputValues.width + newInputValues.length) * 2) / 2))
      }
      return newInputValues
    });


    if (fieldName === "height") {
      if (value < 30 || value > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Invalid value. Please enter between 30 and 100.",
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
          [fieldName]: "Invalid value. Please enter between 30 and 100.",
        }));
      } else if (value >= newInputValues.length) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Width must be smaller than Length.",
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
          [fieldName]: "Invalid value. Please enter between 30 and 100.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "",
        }));
        if (newInputValues.width >= value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            width: "Width must be smaller than Length.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            width: "",
          }));
        }
      }
    }
    warningOrderSubmit.current.innerText = ""
  };
  const handleCallback = (childData) => {
    setComponent(prev => {
      const newComponent = prev.filter(compo => compo.type != childData.type)
      const compo = [
        ...newComponent, childData
      ]


      setTotal(compo.reduce((pre, curr) => pre + curr.total, 0))
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

  const handleSubmitOrder = () => {
    if (getToken() == null) {
      navigate("/login")
    }
    else {
      if (component && validDoor && validSpoke && isInputValid) {
        setOpen(true)
        const componentList = component.map(c => ({ _id: c.item._id, quantity: c.quantity }))
        const customCage = {
          width: inputValues.width,
          height: inputValues.height,
          length: inputValues.length,
          userId: jwtDecode(getToken()).id,
          component: componentList,
          createDate: new Date().toLocaleDateString('en-ZA'),
          status: "Pending"
        }
        fetch("http://localhost:5000/api/v1/cage/customCages/pending/" + jwtDecode(getToken()).id, {
          method: "GET",
          contentType: 'application/json',
          headers: {
            'Authorization': `Bearer ${getToken()}`
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data != "Pending") {
              return new Promise(res =>
                res(fetch("http://localhost:5000/api/v1/cage", {
                  method: "POST",
                  body: JSON.stringify(customCage),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }))
              ).then(res => res.json())
                .then(res => {
                  console.log("zozo");
                  setTimeout(() => {
                    setOpen(false)
                    navigate('/cart')
                  }, 3000)
                })
            }
            else {
              setOpen(false)
              warningOrderSubmit.current.innerText = "You have a custom cage pending"
            }
          })

        socket.emit('send_request_custom_cage', { userId: "AAA", status: "request" })


      }

      else {
        warningOrderSubmit.current.innerText = "The order cannot be created."
      }
    }
  }
  return (

    <div className="w-[80%] m-auto mt-10 p-10" style={{ border: "1px solid #ddd", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
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
      </div> : ""}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Custom your own bird cage</h1>
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
              handleInputChange("height", parseInt(e.target.value, 10), { height: e.target.value })
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
              handleInputChange("length", parseInt(e.target.value, 10), { length: e.target.value })
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
              handleInputChange("width", parseInt(e.target.value, 10), { width: e.target.value })
            }
          />
          {errors.width && <div className="error-message" style={{ fontSize: "13px", color: "red" }}>{errors.width}</div>}
        </div>
        <div className="howToOrder-container">
          <div className="howToOrder">
            <div className="howToOrder-item" style={{ fontWeight: 700 }}>
              <DoubleArrowIcon color="warning" fontSize="small" />  Length, Width, Height (min: 30, max: 100)
            </div>
            <div className="howToOrder-item"><DoubleArrowIcon color="warning" fontSize="small" />Width must be smaller than Length</div>
            <div className="howToOrder-item"><DoubleArrowIcon color="warning" fontSize="small" />Spoke: min <p className="condition-spoke">{isInputValid ? min : 0}</p> max  <p className="condition-spoke">{isInputValid ? max : 0}</p></div>
            <div className="howToOrder-item"><DoubleArrowIcon color="warning" fontSize="small" />Door must be smaller than 5</div>
            <div className="howToOrder-item total-component-item">Cost of components: {total}</div>
          </div>
          <div className="order-submit" style={{ position: "absolute", right: 0, height: "100px", width: "30%" }}>
            <button onClick={handleSubmitOrder} className="order-button">Order</button>
            <div
              ref={warningOrderSubmit}
              className="error-message error-message-order"
            >
            </div>
          </div>
        </div>
      </div>

      <div className="component-container">
        <div>
          <Roof
            total={total}
            roofs={roofList}
            parentCallback={handleCallback}
            isDisabled={!isInputValid}
          />
          <Spoke
            total={total}
            spokes={spokeList}
            setValidSpoke={setValidSpoke}
            parentCallback={handleCallback}
            min={min}
            max={max}
            isDisabled={!isInputValid}
          />
          <Door
            total={total}
            doors={doorList}
            setValidDoor={setValidDoor}
            parentCallback={handleCallback}
            isDisabled={!isInputValid}
          />
          <Base
            bases={baseList}
            total={total}
            parentCallback={handleCallback}
            isDisabled={!isInputValid}
          />
        </div>

        <div className="component-images">
          {component.map(c =>
            <div className="component" key={c.type}>
              <span style={{ fontFamily: "Roboto", fontWeight: 500, textTransform: "uppercase", fontSize: "20px", marginBottom: "10px" }}>{c.type}</span>
              <img className="component-image" src={c.item.imagePath} />
            </div>)}
        </div>
      </div>


    </div>
  );
}
