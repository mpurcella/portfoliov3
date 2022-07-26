import React from 'react';
import About from '../sections/about/About';
import Contact from '../sections/contact/Contact';
import Hero from '../sections/hero/Hero';
import Technologies from '../sections/technologies/Technologies';
import Work from '../sections/work/Work';
import './Home.scss';

const Home = ({ heroRef, aboutRef, technologiesRef, workRef, contactRef }) => {
	// Sets state for Modal
	return (
		<main className='main'>
			<Hero heroRef={heroRef} />
			<About aboutRef={aboutRef} />
			<Technologies technologiesRef={technologiesRef} />
			<Work workRef={workRef} />
			<Contact contactRef={contactRef} />
		</main>
	);
};

export default Home;
