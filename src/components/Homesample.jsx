import React from 'react';
import '/src/assets/css/homesample.css';

const HomeSample = () => {
	return (
		<section id='container'>

			<div className='sample-container'>
				<div className='samples'>
					<img src='/src/assets/images/sample1.jpeg' alt='sample' />
				</div>

				<div className='samples'>
                                        <img src='/src/assets/images/sample2.jpeg' alt='sample' />
                                </div>

				<div className='samples'>
                                        <img src='/src/assets/images/sample3.jpeg' alt='sample' />
                                </div>

				<div className='samples'>
                                        <img src='/src/assets/images/sample4.jpeg' alt='sample' />
                                </div>
			</div>

			<div className='sample-container'>
				<div className='web'>
					<img src='/src/assets/images/em.png' alt='sample' />
				</div>

				<div className='web'>
					<img src='/src/assets/images/web.jpeg' alt='sample' />

				</div>

				<div className='samples hide-sample'>
                                        <img src='/src/assets/images/sample7.jpeg' alt='sample' />

                                </div>
			</div>
		</section>
	);
};

export default HomeSample;
