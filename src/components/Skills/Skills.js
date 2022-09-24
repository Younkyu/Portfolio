import './Skills.css';
import { Card } from 'react-bootstrap';
import HoverText from '../HoverText/HoverText.js';
import AngularIcon from '../../images/angularjs-logo.png';
import BootstrapIcon from '../../images/bootstrap-logo.png';
import CIcon from '../../images/c-logo.png';
import CSharpIcon from '../../images/c-sharp-logo.png';
import CSSIcon from '../../images/css-logo.png';
import ExpressIcon from '../../images/expressjs-logo.png';
import FigmaIcon from '../../images/figma-logo.png';
import HTMLIcon from '../../images/html-logo.png';
import JavaIcon from '../../images/java-logo.png';
import JavascriptIcon from '../../images/javascript-logo.png';
import MongoDBIcon from '../../images/mongodb-logo.png';
import MySQLIcon from '../../images/mysql-logo.png';
import NodeIcon from '../../images/nodejs-logo.png';
import PythonIcon from '../../images/python-logo.png';
import ReactIcon from '../../images/react-logo.png';
import RestIcon from '../../images/rest-api-logo.png';
import TypescriptIcon from '../../images/typescript-logo.png';
import UnityIcon from '../../images/unity-logo.png';

function Skills() {
    return (
        <>
            <div>
                <h2 id="skills-page-title">Skills and Tools</h2>
            </div>
            <div className="box-container center-content horizontal-flex-box wrap-box scroll-div">
                <HoverText labelText='AngularJS' image={AngularIcon} altText='angular logo' />
                <HoverText labelText='Bootstrap' image={BootstrapIcon} altText='bootstrap logo' />
                <HoverText labelText='C++' image={CIcon} altText='c++ logo' />
                <HoverText labelText='C#' image={CSharpIcon} altText='c# logo' />
                <HoverText labelText='CSS' image={CSSIcon} altText='css logo' />
                <HoverText labelText='ExpressJS' image={ExpressIcon} altText='express logo' />
                <HoverText labelText='Figma' image={FigmaIcon} altText='figma logo' />
                <HoverText labelText='HTML' image={HTMLIcon} altText='html logo' />
                <HoverText labelText='Java' image={JavaIcon} altText='java logo' />
                <HoverText labelText='Javascript' image={JavascriptIcon} altText='javascript logo' />
                <HoverText labelText='MongoDB' image={MongoDBIcon} altText='mongodb logo' />
                <HoverText labelText='MySQL' image={MySQLIcon} altText='mysql logo' />
                <HoverText labelText='NodeJS' image={NodeIcon} altText='node logo' />
                <HoverText labelText='Python' image={PythonIcon} altText='python logo' />
                <HoverText labelText='ReactJS' image={ReactIcon} altText='react logo' />
                <HoverText labelText='RESTful API' image={RestIcon} altText='rest api logo' />
                <HoverText labelText='Typescript' image={TypescriptIcon} altText='typescript logo' />
                <HoverText labelText='Unity' image={UnityIcon} altText='unity logo' />
            </div>
        </>
    );
}

export default Skills;