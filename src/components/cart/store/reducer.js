import { ADD_TO_CART } from './constants'
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
        default:
            break;
    }
}
export default reducer
export { initState, initial }