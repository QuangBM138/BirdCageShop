import { ADD_TO_CART, DECREASE_QUANTITY, ONCHANGE_QUANTITY } from './constants'
import { Products_Cage } from '../../../data/Cages'
const initState = []
const initial = () => JSON.parse(localStorage.getItem('cart')) || initState
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const cageIndex = state.findIndex(cage => cage.id === action.payload)
            if (cageIndex >= 0) {
                state[cageIndex].cartQuantity += 1
            } else {
                return [
                    ...state,
                    {
                        id: action.payload,
                        ...Products_Cage[action.payload],
                        cartQuantity: 1
                    }
                ]
            }
            return [...state]
        }

        case DECREASE_QUANTITY: {
            return state.find(item => item.id === action.payload).cartQuantity === 1 ?
                state.filter(item => item.id != action.payload)
                : state.map(item =>
                    item.id === action.payload
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
            return state.map(item => item.id === action.payload.id
                ? {
                    ...item, cartQuantity: action.payload.value
                }
                : item
            )

        }
        default:
            break;
    }
}
export default reducer
export { initState, initial }