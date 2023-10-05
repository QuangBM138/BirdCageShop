import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./constants";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})
export const increaseQuantity = payload => ({
    type: INCREASE_QUANTITY,
    payload
})

export const decreaseQuantity = payload => ({
    type: DECREASE_QUANTITY,
    payload
})