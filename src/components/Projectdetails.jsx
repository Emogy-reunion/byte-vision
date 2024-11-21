import React from 'react';
import '/src/assets/css/projects.css';

const ProjectDetails = () => {

	return (
		<section>
			<h1>Our projects</h1>
			<div className='project-container'>
				<a href='#'>
					<div className='project'>
						<img src='/src/assets/images/em.png' alt='project' />
					</div>
				</a>

				<a href='#'>
					<div className='project'>
                        		        <img src='/src/assets/images/soon.jpeg' alt='project' />
                       			</div>   
				</a>

				<a href='#'>
					<div className='project'>
                	                	<img src='/src/assets/images/soon.jpeg' alt='project' />
                        		</div>
				</a>

				<a href='#'>
					<div className='project'>
                                		<img src='/src/assets/images/soon.jpeg' alt='project' />
                       			</div>
				</a>
			</div>

		</section>
	);
};

export default ProjectDetails;
