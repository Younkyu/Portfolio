import './About.css';
import { Button } from 'react-bootstrap';
import Pdf from '../../YKIM_RESUME.pdf';

function About() {
    return (
        <>
            <div id='about-page' className='center-content box-container vertical-flex-box'>
                <div id='bitmoji-and-text'>
                    <div id='about-page-intro' className='vertical-flex-box'>
                        <h2>My name is Younkyu Kim</h2>
                        <h3>Full Stack Web Developer</h3>
                        <div id='personal-info'>
                            <p>Age: 24</p>
                            <p>Gender: Male</p>
                            <p>Ethnicity: Korean</p>
                            <p>Pronouns: He/Him</p>
                        </div>
                        <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                            <Button trailingIcon="picture_as_pdf" label="Resume" id='resume-btn' variant='primary'>Resume</Button>
                        </a>
                    </div>
                    <img src={require('../../images/bitmoji.png')} alt='bitmoji' id="bitmoji" />
                </div>
                <p>I'm a full stack developer located in Washington, United States.
                    I have attained the Bachelor's of Science degree in Computer Science and
                    Software Engineering from the Unversity of Washington.
                    My passion mainly lies in full stack web development, but I'm also interested in
                    video game design/programming. I aspire to be a part of a company/organization
                    where I can make direct positive impact on the community around me. I highly
                    value team-collaboration, communication, and healthy work-life schedule.
                </p>
            </div>
        </>
    );
}

export default About;
