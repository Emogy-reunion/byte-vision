import React from 'react';
import '/src/assets/css/cta.css';
import { Link } from 'react-router-dom';

const CallAction = () => {
	return (
		<section className='cta'>
			<h2>Got a Project? Take a look at our services</h2>

			<div className='cta-text'>
				<Link to='/services' className="btn">Explore Services</Link>
			</div>

			<div className='social-icons'>
        			<a href="https://www.instagram.com" target="_blank" className="social-icon"><i className='bx bxl-instagram'></i></a>

				<a href="https://www.linkedin.com" target="_blank" className="social-icon"><i className='bx bxl-linkedin'></i></a>

				<a href="https://wa.me/254790425403" target="_blank" className="social-icon"><i className="bx bxl-whatsapp"></i></a>

        			<a href="mailto:info.bytevision@gmail.com" target="_blank" className="social-icon"><i className="bx bxl-gmail"></i></a>
    			</div>

			<div className="social">
				<a href="https://wa.me/254790425403" target="_blank">Let's Chat</a>
			</div>
		</section>
	);
};

export default CallAction;
