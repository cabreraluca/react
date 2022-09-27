import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = () =>{

    }

    const clear = () =>{
        setCart([])
    }

    const removeItem = (id) => {

    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id )
    }
    return(
        <CartContext.Provider value={{cart, clear }}>
            {children}
        </CartContext.Provider>
    )
}
