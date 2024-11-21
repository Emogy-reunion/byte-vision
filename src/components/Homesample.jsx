import React from 'react';
import '/src/assets/css/homesample.css';
import sample1 from '/src/assets/images/sample1.jpeg';
import sample2 from '/src/assets/images/sample2.jpeg';
import sample3 from '/src/assets/images/sample3.jpeg';
import sample4 from '/src/assets/images/sample4.jpeg';
import em from '/src/assets/images/em.png';
import web from '/src/assets/images/web.jpeg';
import sample7 from '/src/assets/images/sample7.jpeg';

const HomeSample = () => {
	return (
		<section id='container'>

			<div className='sample-container'>
				<div className='samples'>
					<img src={sample1} alt='sample' />
				</div>

				<div className='samples'>
                                        <img src={sample2} alt='sample' />
                                </div>

				<div className='samples'>
                                        <img src={sample3} alt='sample' />
                                </div>

				<div className='samples'>
                                        <img src={sample4} alt='sample' />
                                </div>
			</div>

			<div className='sample-container'>
				<div className='web'>
					<img src={em} alt='sample' />
				</div>

				<div className='web'>
					<img src={web} alt='sample' />

				</div>

				<div className='samples hide-sample'>
                                        <img src={sample7} alt='sample' />

                                </div>
			</div>
		</section>
	);
};

export default HomeSample;
