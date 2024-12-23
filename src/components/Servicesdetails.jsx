import React from "react";
import "/src/assets/css/services.css";
import emImage from '/src/assets/images/em.png';
import devImage from '/src/assets/images/dev.jpeg';
import dev2Image from '/src/assets/images/dev2.jpeg';
import ui1Image from '/src/assets/images/ui1.jpg';
import ui2Image from '/src/assets/images/ui2.jpg';
import ui3Image from '/src/assets/images/ui3.jpg';
import maintain1Image from '/src/assets/images/maintain1.jpeg';
import techImage from '/src/assets/images/tech.jpeg';
import maintain2Image from '/src/assets/images/maintain2.jpeg';
import sample1Image from '/src/assets/images/sample1.jpeg';
import sample3Image from '/src/assets/images/sample3.jpeg';
import sample4Image from '/src/assets/images/sample4.jpeg';
import branding1Image from '/src/assets/images/branding1.jpeg';
import branding2Image from '/src/assets/images/branding2.jpeg';
import branding3Image from '/src/assets/images/branding3.jpeg';

const ServiceDetails = () => {
	return (
		<section>
			<h1>Here's what we do</h1>

			<div className='services-container'>
				<h2>Web development</h2>
				<p>Crafting responsive and robust websites that deliver seamless user experiences across all devices.</p>
				<div className='services'>

					<div>
						<img src={emImage} alt='tech' />
					</div>

					<div>
                                        	<img src={devImage} alt='tech' />
                                	</div>

					<div className='hide-service'>
                                        	<img src={dev2Image} alt='tech' />
                                	</div>

				</div>
			</div>

			<div className='container'>
				<h2>UI/UX design</h2>
				<p>Designing intuitive and engaging interfaces that enhance user satisfaction and interaction.</p>
				<div className='services'>

					<div className='hide-service'>
						<img src={ui1Image} alt='tech' />
					</div>

					<div>
                                        	<img src={ui2Image} alt='tech' />
                                	</div>

					<div>
                                        	<img src={ui3Image} alt='tech' />
                                	</div>

				</div>
			</div>

			<div className='container'>
				<h2>Web maintenance</h2>
				<p>Ensuring your website remains updated, secure, and performing at its best.</p>
				<div className='services'>

					<div>
						<img src={maintain1Image} alt='tech' />
					</div>

					<div className='hide-service'>
                                        	<img src={techImage} alt='tech' />
                                	</div>

					<div>
                                        	<img src={maintain2Image} alt='tech' />
                                	</div>
				</div>
			</div>

			<div className='container'>
                                <h2>Graphic design</h2>
                                <p>Creating visually compelling designs that effectively communicate your brand's message.</p>
                                <div className='services'>

                                        <div>
                                                <img src={sample1Image} alt='tech' />
                                        </div>

                                        <div className='hide-service'>
                                                <img src={sample3Image} alt='tech' />
                                        </div>

                                        <div>
                                                <img src={sample4Image} alt='tech' />
                                        </div>
                                </div>
                        </div>


			<div className='container'>
                                <h2>Branding</h2>
                                <p>Elevating your brand with custom designs for polo shirts, mugs, bottles, t-shirts, and more.</p>
                                <div className='services'>

                                        <div>
                                                <img src={branding1Image} alt='tech' />
                                        </div>

                                        <div>
                                                <img src={branding2Image} alt='tech' />
                                        </div>

                                        <div className='hide-service'>
                                                <img src={branding3Image} alt='tech' />
                                        </div>
                                </div>
                        </div>

		</section>
	);
};

export default ServiceDetails;
