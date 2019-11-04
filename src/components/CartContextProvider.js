import React, { useState } from 'react'
import CartContext from "../contexts/CartContext"

const CartContextProvider = props => {

const [cart, setCart] = useState([]);

const addItem = item => {
    return setCart([...cart, item])
};

return (
    <CartContext.provider value={{}}>
        {props.children}
    </CartContext.provider>
)


}