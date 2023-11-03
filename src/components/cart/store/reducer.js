import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, ONCHANGE_QUANTITY, ONDELETE_ITEM, DELETE_CART } from './constants'
const initState = []
const initial = () => JSON.parse(localStorage.getItem('cart')) || initState
const reducer = (state, action) => {

    console.log("State: ", state);
    console.log("Payload: ", action.payload);
    switch (action.type) {
        case DELETE_CART: {
            localStorage.removeItem("cart");
            return []
        }
        case ADD_TO_CART: {
            const cageIndex = state.findIndex(item => item.cage._id === action.payload.index._id)
            if (cageIndex >= 0) {
                state[cageIndex].cartQuantity += action.payload.quantity
            } else {
                return [
                    ...state,
                    {
                        cage: action.payload.index,
                        cartQuantity: action.payload.quantity
                    }
                ]
            }
            return [...state]
        }
        case INCREASE_QUANTITY: {
            const cageIndex = state.findIndex(item => item.cage._id === action.payload.index)
            if (cageIndex >= 0) {
                state[cageIndex].cartQuantity += action.payload.quantity
            } else {
                return [
                    ...state,
                    {
                        cage: action.payload.index,
                        cartQuantity: action.payload.quantity
                    }
                ]
            }
            return [...state]
        }
        case DECREASE_QUANTITY: {
            return state.find(item => item.cage._id === action.payload).cartQuantity === 1 ?
                state.filter(item => item.cage._id != action.payload)
                : state.map(item =>
                    item.cage._id === action.payload
                        ? {
                            ...item, cartQuantity: item.cartQuantity - 1
                        }
                        : item
                )


        }
        case ONCHANGE_QUANTITY: {
            const regx = /^[^1-9][^0-9]/g
            action.payload.value = parseInt(action.payload.value.replace(regx, ''))
            if (isNaN(action.payload.value) || action.payload.value == 0) action.payload.value = 1
            return state.map(item => item.cage._id === action.payload.id
                ? {
                    ...item, cartQuantity: action.payload.value
                }
                : item
            )

        }
        case ONDELETE_ITEM: {
            return state.filter(item => item.cage._id != action.payload)
        }
        default:
            break;
    }
}
export default reducer
export { initState, initial }