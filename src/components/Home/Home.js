import './Home.css';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    return (
        <>
            <div id="home-page" className="horizontal-flex-box">
                <div>
                    <div className="page-body box-container" id="introduction">
                        <h2>Hello World!_</h2>
                        <h3>I'm <span id='legal-name'>Younkyu Kim</span>,</h3>
                        <h4 id="preferred-name-text">but you can call me <span id="preferred-name">Daniel</span>.</h4>
                        <p>Professional full-stack developer able to produce high quality designs, solutions, and programs.</p>
                    </div>
                    <div id="link-buttons">
                        <img src={require('../../images/linkedin.png')} alt='linkedin icon' className="media-btn" onClick={() => window.open('https://www.linkedin.com/in/younkyu') } />
                        <img src={require('../../images/github.png')} alt='github icon' className="media-btn" onClick={() => window.open('https://github.com/Younkyu') } />
                        <img src={require('../../images/instagram.png')} alt='instagram icon' className="media-btn" onClick={() => window.open('https://www.instagram.com/ohthatdanielkim') } />
                        <img src={require('../../images/email.png')} alt='email icon' className="media-btn" onClick={() => window.location.href = './#/contact' } />
                    </div>
                </div>
                <div id="self-pic">
                    <img src={require("../../images/selfportrait.png")} alt="self portrait" id="self-portrait" />
                </div>
            </div>
        </>
    );
}

export default Home;