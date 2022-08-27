import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar bg='transparent' expand='lg' >
        <Container >
            <Navbar.Brand >Zomzto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='d-flex flex-row-reverse'>
                <Nav  >
                    <Nav.Link href='#'>Investor</Nav.Link>
                    <Nav.Link href='#'>Add Rastaurant</Nav.Link>
                    <Nav.Link href='#'>Log In</Nav.Link>
                    <Nav.Link href='#'>Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar
