import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import logo from '../img/logo.png'
import '../styles/Navbar.css'
import { useStateValue } from '../StateProvider'
import { Link } from "react-router-dom";

const NavBar = () => {

    const [openNavbar, setOpenNavbar] = useState(false);
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="appNavbar">
            <Navbar navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <div className="navLogo">
                            <img src={logo} alt="logo" />
                            <NavbarBrand id='logoText'><h3 id='logoText'>SUBLIME</h3></NavbarBrand>
                        </div>
                        
                        <NavbarToggler
                            color="white"
                            onClick={() => setOpenNavbar(!openNavbar)}
                            ripple="light"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav>
                        {
                            user ? (
                                <Link exact to='/'>
                                    <NavItem active="light" ripple="light" 
                                    onClick={() => {localStorage.clear(); dispatch({
                                        type: 'SET_USER',
                                        user : null
                                    })}}>
                                        Logout
                                    </NavItem>
                                </Link>
                            ) : (
                                <Link exact to='/Login'>
                                    <NavItem active="light" ripple="light">
                                        Login
                                    </NavItem>
                                </Link>
                            )
                        }
                          
                           
                            <Link exact to='/'>
                                <NavItem ripple="light">
                                    Register
                                </NavItem>
                            </Link>

                             <Link exact to={user ? ('/Profile') : ('/Login')}>
                                <NavLink  ripple="light">
                                    Profile
                                </NavLink>
                            </Link>
                        </Nav>
                    </NavbarCollapse>
                </NavbarContainer>
        </Navbar> 
        </div>
    )
}

export default NavBar
