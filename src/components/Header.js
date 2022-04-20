import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Product Management</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header