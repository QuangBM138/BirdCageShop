import { ADD_TO_CART } from './constants'
import { Products_Cage } from '../../../data/Cages'
const initState = {
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const cageIndex = state.cart.findIndex(cage => cage.id === action.payload)
            if (cageIndex >= 0) {
                state.cart[cageIndex].cartQuantity += 1
            } else {
                const cageTemp = {
                    id: action.payload,
                    ...Products_Cage[action.payload],
                    cartQuantity: 1
                }

                return {
                    ...initState,
                    cart: [...state.cart, cageTemp]
                }
            }
            return {
                ...initState,
                cart: [...state.cart]
            }


        }
        default:
            break;
    }
}
export default reducer
export { initState }