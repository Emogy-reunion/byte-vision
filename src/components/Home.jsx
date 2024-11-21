import React from 'react';
import Header from '/src/components/Header';
import NavBar from '/src/components/Navbar';
import HomeText from '/src/components/Hometext';
import HomeSample from '/src/components/Homesample';
import CallAction from '/src/components/Cta';

const Home = () => {
	return (
		<>
			<Header />
			<NavBar />
			<HomeText />
			<HomeSample />
			<CallAction />
		</>
	);
};

export default Home;
