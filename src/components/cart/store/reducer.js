import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from './constants'
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
        case INCREASE_QUANTITY: {


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
        default:
            break;
    }
}
export default reducer
export { initState, initial }