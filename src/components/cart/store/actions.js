import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, ONCHANGE_QUANTITY, ONDELETE_ITEM, DELETE_CART } from "./constants";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})


export const decreaseQuantity = payload => ({
    type: DECREASE_QUANTITY,
    payload
})
export const increaseQuantity = payload => ({
    type: INCREASE_QUANTITY,
    payload
})

export const onChangeQuantity = payload => ({
    type: ONCHANGE_QUANTITY,
    payload
})

export const onDeleteItem = payload => ({
    type: ONDELETE_ITEM,
    payload
})

export const deleteCart = payload => ({
    type: DELETE_CART,

})