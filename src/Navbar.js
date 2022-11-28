import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {

    // ! Here make sure to return and removeEventLister if added any in the useEffect hook

    return (
        <Container>
            <Img src='/Images/logo.png' alt='netflixLogo' />
            <Navlinks>
                <NavLink className='navLink'  to='' activeClassName='selected'>Home</NavLink>
                <NavLink className='navLink' to='' activeClassName='selected'>TV Shows</NavLink>
                <NavLink className='navLink' to='' activeClassName='selected'>Movies</NavLink>
                <NavLink className='navLink' to='' activeClassName='selected'>New & Popular</NavLink>
                <NavLink className='navLink' to='' activeClassName='selected'>My List</NavLink>
            </Navlinks>
            <RightCorner>
                <AccountsImg src='/Images/accountsLogo.jpg' />
            </RightCorner>
        </Container>
    )
}

export default Navbar

const media = {
    mobile:'@media(max-width:1280px)'
}


const Container = styled.div`
    position:fixed;
    height:95px;
    width:100%;
    display: flex;
    align-items: center;
        /* Animation */
    transition-timing-function: ease-in;
    transition: all 0.5s;
    background-color:#130F0B;
`

const Img = styled.img`
    object-fit: contain;
    margin-left:40px;
    max-width:120px;
    max-height:60px;
    cursor: pointer;
`

const AccountsImg = styled.img`
    object-fit: contain;
    margin-left:40px;
    /* max-width:50px; */
    max-height:50px;
    cursor: pointer;
`

const Navlinks = styled.nav`
    display: flex;
    margin-left:15px;
    .navLink{
        color:whitesmoke;
        font-size:1.4rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 200;
        text-decoration:none;
        margin:auto 12px auto 12px;
        ${media.mobile} {
            font-size:1rem;
        }
        .selected{
            color:red;
        }
    }
`

const RightCorner = styled.div`
    position:absolute;
    right:20px;
    justify-self: flex-end;
    color:white;
`