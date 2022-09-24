import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectList.css';

function ProjectList() {
    return (
        <Carousel variant='dark' interval='5000'>
            <Carousel.Item>
                <div className='horizontal-flex-box carousel-content'>
                    <img
                        className="d-block screenshot-img"
                        src={require('../../images/boardgame-screenshot.jpg')}
                        alt="boardgame screenshot"
                    />
                    <Carousel.Caption>
                        <h3>Lecture Board Game</h3>
                        <p>A virtual board game that students can play during online lectures.
                            Used Augmented Space Library in Unity to build an multi-user application
                            with online connectivity through AWS cloud service.
                        </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='horizontal-flex-box carousel-content'>
                    <div>
                        <img
                            className="d-block screenshot-img"
                            src={require('../../images/crane-screenshot.jpg')}
                            alt="crane screenshot"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Crane Tic-Tac-Toe</h3>
                        <p>A local multiplayer game where players take turns controlling a 3D-model
                            of a crane to pick up game pieces and play a game of Tic-Tac-Toe. The
                            game is built in Unity Engine using C# scripts and custom shaders.
                        </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='horizontal-flex-box carousel-content'>
                    <img
                        className="d-block screenshot-img"
                        src={require('../../images/gutendext-screenshot.jpg')}
                        alt="gutendext screenshot"
                    />
                    <Carousel.Caption>
                        <h3>GutenDext</h3>
                        <p>Project that uses the public online book database which contains
                            several copyright-free published novels from around the world to
                            employ the books' texts into a type-practicing web application.
                        </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='horizontal-flex-box carousel-content'>
                    <img
                        className="d-block screenshot-img"
                        src={require('../../images/portfolio-screenshot.jpg')}
                        alt="portfolio screenshot"
                    />
                    <Carousel.Caption>
                        <h3>Portfolio Website</h3>
                        <p>Static webpage containing the portfolio which outlines general personal
                            information. Built using self-taught React.js and Bootstrap framework
                            for advanced UI/UX components.
                        </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='horizontal-flex-box carousel-content'>
                    <img
                        className="d-block screenshot-img"
                        src={require('../../images/wordle-screenshot.jpg')}
                        alt="wordle screenshot"
                    />
                    <Carousel.Caption>
                        <h3>Wordle Clone</h3>
                        <p>A clone webapplication of 'Wordle': a vocabulary game where player
                            attempts to guess a 5-letter word with given contextual hints.
                            This project was developed using self-taught AngularJS.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectList;