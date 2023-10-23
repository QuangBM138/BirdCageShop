import { ADD_TO_CART, DECREASE_QUANTITY, ONCHANGE_QUANTITY, ONDELETE_ITEM } from './constants'
import { Products_Cage } from '../../../data/CagesNewest'
const initState = []
const initial = () => JSON.parse(localStorage.getItem('cart')) || initState
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const cageIndex = state.findIndex(cage => cage._id === action.payload.index)
            console.log(state, "state")
            if (cageIndex >= 0) {
                state[cageIndex].cartQuantity += action.payload.quantity
            } else {
                return [
                    ...state,
                    {
                        ...Products_Cage.find(cage => cage._id === action.payload.index),
                        cartQuantity: action.payload.quantity
                    }
                ]
            }
            return [...state]
        }

        case DECREASE_QUANTITY: {
            return state.find(item => item._id === action.payload).cartQuantity === 1 ?
                state.filter(item => item._id != action.payload)
                : state.map(item =>
                    item._id === action.payload
                        ? {
                            ...item, cartQuantity: item.cartQuantity - 1
                        }
                        : item
                )


        }
        case ONCHANGE_QUANTITY: {
            console.log(action.payload.value)
            const regx = /^[^1-9][^0-9]/g
            action.payload.value = parseInt(action.payload.value.replace(regx, ''))
            if (isNaN(action.payload.value) || action.payload.value == 0) action.payload.value = 1
            return state.map(item => item._id === action.payload.id
                ? {
                    ...item, cartQuantity: action.payload.value
                }
                : item
            )

        }
        case ONDELETE_ITEM: {
            return state.filter(item => item._id != action.payload)
        }
        default:
            break;
    }
}
export default reducer
export { initState, initial }