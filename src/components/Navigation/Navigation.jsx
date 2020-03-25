import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation(props) {
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#footer'
        );
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
            <Navbar.Brand>Movie-list App</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>MovieList</Nav.Link>
                    <Nav.Link onClick={handleClick}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
