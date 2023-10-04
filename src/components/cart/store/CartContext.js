// import { ThemeContext } from '@emotion/react'
// import React, { createContext, useState } from 'react'

// const CartContext = createContext()
// function CartProvider({ children }) {
//     const [cart, setCart] = useState(() => {
//         const storageCages = JSON.parse(localStorage.getItem('cart'))
//         return storageCages ?? []
//     })
//     const cartValue = [
//         cart
//     ]
//     return (
//         <ThemeContext.Provider >
//             {children}
//         </ThemeContext.Provider>
//     )
// }
// export { CartContext, CartProvider }

import { createContext } from "react";
const CartContext = createContext()
export default CartContext