import './Projects.css';
import ProjectList from '../ProjectList/ProjectList.js'

function Projects() {
    return (
        <>
            <div id='projects-page' className='center-content box-container vertical-flex-box'>
                <ProjectList />
            </div>
        </>
    );
}

export default Projects;