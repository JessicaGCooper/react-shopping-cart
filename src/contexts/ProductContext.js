import React, {useState} from 'react'
import data from "../data"

export const ProductContext = React.createContext();


export const ProductContextProvider = props => {
    const [products] = useState(data)

    return (
        <ProductContext.Provider value={[products]}>
            {props.children}
        </ProductContext.Provider>
    )
}

