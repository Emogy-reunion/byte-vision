import React from 'react';
import '/src/assets/css/projects.css';
import emImage from '/src/assets/images/em.png';
import soonImage from '/src/assets/images/soon.jpeg';

const ProjectDetails = () => {

	return (
		<section>
			<h1>Our projects</h1>
			<div className='project-container'>
				<a href='#'>
					<div className='project'>
						<img src={emImage} alt='project' />
					</div>
				</a>

				<a href='#'>
					<div className='project'>
                        		        <img src={soonImage} alt='project' />
                       			</div>   
				</a>

				<a href='#'>
					<div className='project'>
                	                	<img src={soonImage} alt='project' />
                        		</div>
				</a>

				<a href='#'>
					<div className='project'>
                                		<img src={soonImage} alt='project' />
                       			</div>
				</a>
			</div>

		</section>
	);
};

export default ProjectDetails;
