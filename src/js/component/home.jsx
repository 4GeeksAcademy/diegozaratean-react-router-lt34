import React, { useState } from "react";

import About from "./about";
import Service from "./service";
import Contact from "./contact";


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./header";
const Home = () => {
	const [carrito, setCarrito] = useState('el carrito esta vacio')
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/servicios" element={<Service />} />
					<Route path="/contactanos" element={<Contact />} />
				</Routes>
				<p>{carrito}</p>
				<button onClick={()=>setCarrito('agregaste 20 prodcutos')}>Agregar al carrito</button>
				<h1 className="text-center mt-5">Footer</h1>
			</BrowserRouter>
		</>
	);
};

export default Home;
