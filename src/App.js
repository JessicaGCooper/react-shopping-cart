import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContextProvider from '../src/components/ProductContextProvider'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		return setCart([...cart, item])
	};

	return (
		<div className="App">
		 <ProductContextProvider>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</ProductContextProvider>
		</div>
	);
}

export default App;
