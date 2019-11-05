import React, { useState, createContext } from 'react'


export const CartContext = createContext()

export const CartContextProvider = props => {

    const [cart, setCart] = useState([]);
    
    const addItem = item => {
        setCart([...cart, item])
    }
    
    return (
        <CartContext.Provider value={[cart, addItem]} >
            {props.children}
        </CartContext.Provider>
    )
}