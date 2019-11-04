import React, { useState } from 'react'
import ProductContext from "../contexts/ProductContext"
import data from "../data"

const ProductContextProvider = props => {
    const [products] = useState(data)

    return (
        <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider


// const [products] = useState(data);
