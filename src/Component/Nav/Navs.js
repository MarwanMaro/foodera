import React from "react";
import { Navbar, Nav , Container  } from "react-bootstrap";
import "./Navs.css"
import logo from "./../../assets/logo.png"
import { useState } from "react";


const Navs = ()=> {
    const [navbar,setNavbar] = useState(false);

    const changeBackground = ()=>{
        
        if(window.scrollY >= 50){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll' , changeBackground);
    return(
        <Navbar  expand="lg" className={`navbar fixed-top ${navbar && 'active'}`}>
         <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title="logo" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#Header">Home</Nav.Link>
                <Nav.Link href="#About">About Us</Nav.Link>
                <Nav.Link href="#Explore">Explore Foods</Nav.Link>
                <Nav.Link href="#review">Reviews</Nav.Link>
                <Nav.Link href="#FAQ">FAQ</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link id="NumberNav">20+ 01151283707</Nav.Link>
           </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
    )
}


export default Navs;