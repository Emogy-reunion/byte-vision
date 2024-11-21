import React from 'react';
import '/src/assets/css/gallery.css';
const GalleryDetails = () => {

	return (
		<section>
			<h1>Our work</h1>
			<div className='gallery-container'>
				<div className='work'>
					<img src='/src/assets/images/ui2.jpg' alt='projects' />
				</div>

				<div className='work'>
                                        <img src='/src/assets/images/sample7.jpeg' alt='projects' />
                                </div>


				<div className='work'>
                                        <img src='/src/assets/images/branding1.jpeg' alt='projects' />
                                </div>


				<div className='work'>
                                        <img src='/src/assets/images/sample4.jpeg' alt='projects' />
                                </div>
			</div>

			<div className='gallery-container'>
				<div className='gallery-image'>
                                        <img src='/src/assets/images/em.png' alt='projects' />
                                </div>

                                <div className='gallery-image'>
                                        <img src='/src/assets/images/web.jpeg' alt='projects' />
                                </div>


                                <div className='work hide-work'>
                                        <img src='/src/assets/images/branding2.jpeg' alt='projects' />
                                </div>
			</div>
		</section>
	);
};

export default GalleryDetails;
