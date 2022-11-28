import { signOut } from '@firebase/auth';
import { Notifications} from '@material-ui/icons';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../components/navbar';
import { Browse } from '../constants/routes';
import { auth } from '../firebase';
import useLocalStorage from '../hooks/auth-listener';

function NavbarContainer() {
    const location = useLocation();

    const user = useLocalStorage();
    const history = useHistory();

    const [dropToggle,setDropToggle] = useState(false);

    const dropToggleEvent = () => {
        setDropToggle(true);
    }

    window.onclick = function(event) {
        if(!event.target.matches('.logo')) {
            setDropToggle(false);
        }
    }

    const clickEvent = (e) => {
        e.preventDefault();
        if(user) {
            history.push(Browse);
        }else{
            history.push('/');
        }
    }

    const signoutEvent = (e) => {
        e.preventDefault();
        signOut(auth);
        history.push('/');
        console.log("auth : ",auth);
    }


    return (
        <Navbar.Container>
            <Navbar.Logo src='/images/logo.png' alt='Netflix' onClick={clickEvent} />
            {user ? (
            <Navbar.InnerContainer>
            <Navbar.InnerLeft>
                <Navbar.Title to='/browse' >Home</Navbar.Title>
                <Navbar.Title to='/tvshows' >TV Shows</Navbar.Title>
                <Navbar.Title to='/movies' >Movies</Navbar.Title>
                <Navbar.Title to='/newandpopular' >New & Popular</Navbar.Title>
                <Navbar.Title to='/mylist' >My List</Navbar.Title>
            </Navbar.InnerLeft>
            <Navbar.InnerRight>
                <Navbar.SearchContainer />
                <Notifications className='item notification' />
                <Navbar.AccountsLogo 
                onClick={dropToggleEvent}
                className='logo'
                src='/images/accountsLogo.jpg' />
                <Navbar.DropDownMenu dropToggle={dropToggle}>
                        <Navbar.DropDownListItems>App Settings</Navbar.DropDownListItems>
                        <Navbar.DropDownListItems>Account</Navbar.DropDownListItems>
                        <Navbar.DropDownListItems>About</Navbar.DropDownListItems>
                        <Navbar.DropDownListItems>Help</Navbar.DropDownListItems>
                        <Navbar.DropDownListItems className='signoutbtn' onClick={signoutEvent}>Sign Out</Navbar.DropDownListItems>
                </Navbar.DropDownMenu>
            </Navbar.InnerRight>
        </Navbar.InnerContainer>
            ) : (
                <Navbar.ButtonContainer location={location.pathname} >
                    <Navbar.Button variant='contained' size='medium' className='button' >Sign In</Navbar.Button>
                </Navbar.ButtonContainer>
            )}
        </Navbar.Container>
    )
}

export default NavbarContainer