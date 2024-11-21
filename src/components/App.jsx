import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/src/components/Home';
import About from '/src/components/About';
import Services from '/src/components/Services';
import Projects from '/src/components/Projects';
import Gallery from '/src/components/Gallery';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/gallery' element={<Gallery />} />
			</Routes>
		</Router>
	);
};

export default App;
