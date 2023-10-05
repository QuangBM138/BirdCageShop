import { ADD_TO_CART, DECREASE_QUANTITY, ONCHANGE_QUANTITY } from "./constants";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})


export const decreaseQuantity = payload => ({
    type: DECREASE_QUANTITY,
    payload
})

export const onChangeQuantity = payload => ({
    type: ONCHANGE_QUANTITY,
    payload
})