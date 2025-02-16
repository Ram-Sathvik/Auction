import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import hammer from '../images/hammer.png';


const Nav = styled(Box)`
    background-color: midnightblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
`

const LeftNav = styled(Box)`
    display: flex;
    align-items: center;
    gap: 80px;
    margin-left: 30px;
`

const RightNav = styled(Box)`
    display: flex;
    align-items: center;
    gap: 80px;
    margin-right: 50px;
`

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
`

const Logo = styled(Typography)`
    color: white;
    font-size: 24px;
    font-weight: 600;  
`

const NavLinks = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: white;
`


const Navbar = () => {
  return (
    <Nav>
        <LeftNav>
            <LogoLink to="/">
                <img src={hammer} width="50px" />
                <Logo>AUCTION</Logo>
            </LogoLink>
            <NavLinks to="/contact">Contact</NavLinks>
            <NavLinks to="/reviews">Reviews</NavLinks>
        </LeftNav>
        <RightNav>
            <NavLinks to="/players">Players List</NavLinks>
            <NavLinks to="/teams">Teams List</NavLinks>
        </RightNav>
    </Nav>
  )
}

export default Navbar;
