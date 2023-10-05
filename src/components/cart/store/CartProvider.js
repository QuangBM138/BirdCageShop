import CartContext from './CartContext'
import { useEffect, useReducer } from "react"
import reducer, { initState, initial } from './reducer'
function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState, initial)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state))
    }, [state])
    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider