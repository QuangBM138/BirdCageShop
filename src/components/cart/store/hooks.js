import CartContext from "./CartContext";
import { useContext } from "react";
export const useStore = () => {
    const [state, dispatch] = useContext(CartContext)
    return [state, dispatch]
}