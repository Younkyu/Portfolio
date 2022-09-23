import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css';

function NavigationBar() {
    const location = useLocation();

    return (
        <>
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={require("../../images/logo.png")} alt="logo" id="header-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={location.pathname} className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/skills">Skills</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;