import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { setSearchMovies } from '../../slices/movieSlice';
import { Item , Container , Logo , InnerContainer , InnerLeft , InnerRight, AccountsLogo, SearchInput, SearchContainer, SearchIcon, ButtonContainer, DropDownMenu, DropDownMenuList, DropDownMenuListItems ,ItemsText  } from '../styles/navbar';


export default function Navbar({children , ...restProps}) {
    return (
        <Item {...restProps}>
                {children}            
        </Item>
    )
}

Navbar.Container = function NavbarContainer({children , ...restProps}) {
    const [showBg, setShowBg] = useState(false);

    const scrollEvent = () => {
        if(window.scrollY > 100) {
            setShowBg(true);
        }else{
            setShowBg(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",scrollEvent);
        return () => window.removeEventListener("scroll", scrollEvent);
    },[]);

    return (
            <Container showBg={showBg} {...restProps}>{children}</Container>
        )
}

Navbar.Logo = function NavbarLogo({...restProps}){
    const history = useHistory();

    const clickEvent = () =>{
        history.push('/');
    }
    return <Logo {...restProps} onClick={clickEvent} />
}

Navbar.InnerContainer = function NavbarInnerContainer({children , ...restProps}) {
    return (
    <InnerContainer {...restProps}>
            {children}
    </InnerContainer>
    )
}

Navbar.InnerLeft = function NavbarInnerLeft({children , ...restProps}) {
    return (
            <InnerLeft {...restProps}>{children}</InnerLeft>
        )
}

Navbar.Title = function NavbarTitle({children , ...restProps}){
    return <NavLink exact activeClassName="active" className='title' {...restProps} >{children}</NavLink>
}

Navbar.InnerRight = function NavbarInnerRight({children , ...restProps}) {
    return <InnerRight {...restProps}>{children}</InnerRight>
}

Navbar.AccountsLogo = function NavbarAccountsLogo({...restProps}){
    return <AccountsLogo {...restProps} />
}

Navbar.DropDownMenu = function NavbarDropDownMenu({children, ...restProps}) {
    return (
    <DropDownMenu {...restProps}>
       <DropDownMenuList>
           {children}
       </DropDownMenuList>
    </DropDownMenu>
    )
}

Navbar.DropDownListItems = function NavbarDropDownItems({children, ...restProps}) {
    return (
        <DropDownMenuListItems {...restProps}>
            <ItemsText>{children}</ItemsText>
        </DropDownMenuListItems>
    )
}

Navbar.SearchContainer = function NavbarSearchContainer ({children, ...restProps}) {
    const API_KEY = '5ede6d9c';
    const dispatch = useDispatch();

    const [searchStatus, setSearchStatus] = useState(false);
    const [searchedMovies, setSearchedMovies] = useState();
    const [timeoutId, setTimeoutId] = useState();

    useEffect(()=>{
        window.addEventListener("scroll",searchScrollEvent);
        fetchData();
    });


    async function fetchData(searchString) {
        const request = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
        setSearchedMovies(request.data.Search);
        dispatch(setSearchMovies(searchedMovies));
    }
    
    const searchScrollEvent = () => {
        (window.scrollY > 100) && setSearchStatus(false);
    }

    const typingEvent = (e) =>{
        clearTimeout(timeoutId);
        const timeout = setTimeout(()=>fetchData(e.target.value),500)
        console.log("timeOut : ",timeout);
        setTimeoutId(timeout);
    }

    const submitEvent = (e) => {
        e.preventDefault();
        console.log(searchedMovies);
    }

    // console.log('SearchedMovies : ',searchedMovies);
    
    return(
    <SearchContainer {...restProps}  searchStatus={searchStatus} >
        <SearchIcon onClick={()=>setSearchStatus(true)} className='icon' />
        {
            searchStatus && ( 
            <form method='get' onSubmit={submitEvent} >
            <SearchInput 
                placeholder='Search' 
                onScroll={()=>setSearchStatus(false)} 
                onChange={typingEvent} 
                onSubmit={submitEvent} /> 
            </form>    
            )
        }
    </SearchContainer>
    )
}

Navbar.ButtonContainer = function NavbarButtonContainer({children,location, ...restProps}) {
    
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        if(location === '/signin' || location === '/signup') {
            setToggle(true);
        }else {
            setToggle(false);
        }
        return  () => toggle
    },[location])
    return (
            <ButtonContainer {...restProps} toggle={toggle}>{children}</ButtonContainer>
    )
}


Navbar.Button = function NavbarButton({children, ...restProps}){

    const history = useHistory();

    const clickEvent = () => {
        history.push('/signin');
    }

    return <Button {...restProps} onClick={clickEvent}>{children}</Button>
}