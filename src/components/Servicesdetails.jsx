import React from "react";
import "/src/assets/css/services.css";

const ServiceDetails = () => {
	return (
		<section>
			<h1>Here's what we do</h1>

			<div className='services-container'>
				<h2>Web development</h2>
				<p>Crafting responsive and robust websites that deliver seamless user experiences across all devices.</p>
				<div className='services'>

					<div>
						<img src='/src/assets/images/em.png' alt='tech' />
					</div>

					<div>
                                        	<img src='/src/assets/images/dev.jpeg' alt='tech' />
                                	</div>

					<div className='hide-service'>
                                        	<img src='/src/assets/images/dev2.jpeg' alt='tech' />
                                	</div>

				</div>
			</div>

			<div className='container'>
				<h2>UI/UX design</h2>
				<p>Designing intuitive and engaging interfaces that enhance user satisfaction and interaction.</p>
				<div className='services'>

					<div className='hide-service'>
						<img src='/src/assets/images/ui1.jpg' alt='tech' />
					</div>

					<div>
                                        	<img src='/src/assets/images/ui2.jpg' alt='tech' />
                                	</div>

					<div>
                                        	<img src='/src/assets/images/ui3.jpg' alt='tech' />
                                	</div>

				</div>
			</div>

			<div className='container'>
				<h2>Web maintenance</h2>
				<p>Ensuring your website remains updated, secure, and performing at its best.</p>
				<div className='services'>

					<div>
						<img src='/src/assets/images/maintain1.jpeg' alt='tech' />
					</div>

					<div className='hide-service'>
                                        	<img src='/src/assets/images/tech.jpeg' alt='tech' />
                                	</div>

					<div>
                                        	<img src='/src/assets/images/maintain2.jpeg' alt='tech' />
                                	</div>
				</div>
			</div>

			<div className='container'>
                                <h2>Graphic design</h2>
                                <p>Creating visually compelling designs that effectively communicate your brand's message.</p>
                                <div className='services'>

                                        <div>
                                                <img src='/src/assets/images/sample1.jpeg' alt='tech' />
                                        </div>

                                        <div className='hide-service'>
                                                <img src='/src/assets/images/sample3.jpeg' alt='tech' />
                                        </div>

                                        <div>
                                                <img src='/src/assets/images/sample4.jpeg' alt='tech' />
                                        </div>
                                </div>
                        </div>


			<div className='container'>
                                <h2>Branding</h2>
                                <p>Elevating your brand with custom designs for polo shirts, mugs, bottles, t-shirts, and more.</p>
                                <div className='services'>

                                        <div>
                                                <img src='/src/assets/images/branding1.jpeg' alt='tech' />
                                        </div>

                                        <div>
                                                <img src='/src/assets/images/branding2.jpeg' alt='tech' />
                                        </div>

                                        <div className='hide-service'>
                                                <img src='/src/assets/images/branding3.jpeg' alt='tech' />
                                        </div>
                                </div>
                        </div>

		</section>
	);
};

export default ServiceDetails;
