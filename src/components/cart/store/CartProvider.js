import CartContext from './CartContext'
import { useReducer } from "react"
import reducer, { initState } from './reducer'
function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider