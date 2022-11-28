import axios from './axios';
import React, {  useEffect, useState } from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import * as Routes from './constants/routes';
import NavbarContainer from './Containers/NavbarContainer';
import Browse from './pages/Browse';
import Movies from './pages/dummies/Movies';
import MyList from './pages/dummies/MyList';
import NewandPopular from './pages/dummies/NewandPopular';
import TvShows from './pages/dummies/TvShows';
import Home from './pages/Home';
import SignIn from './pages/SIgnIn';
import SignUp from './pages/SignUp';
import requests from './Requests';
import { auth } from './firebase';
import {CustomRoute, ProtectedRoute} from './helpers/CustomRoutes';
import useLocalStorage from './hooks/auth-listener';
import useContent from './hooks/use-content';

function App() {
  const [movie, setMovie] = useState([]);

  // `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`

  // async function fetchData() {
  //   const request = await axios.get(requests.fetchNetflixOriginals);
  //   setMovie(
  //     request.data.results[
  //       Math.floor(Math.random() * request.data.results.length - 1)
  //     ]       
  //   )
  // }

  const {content} = useContent(requests.fetchNetflixOriginals);
  console.log(content);

  useEffect(() => {
    // fetchData();    
    window.addEventListener("resize", resize);
    console.log("Auth : ",auth);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  // if(auth) {
  //   alert("User Succesfull Loged In");
  // }else {
  //   alert("Signed Off");
  // }

  const [mobileScreen, setMobilescreen] = useState();

  const resize = () => {
    if(window.innerWidth <= 760) {
      setMobilescreen(true);
    }else{
      setMobilescreen(false);
    }
  }

  useEffect(() => {
  }, [])

  console.log("NetflixOriginals : ",movie);

  const user = useLocalStorage();

  return (
    <Router>
        <NavbarContainer />
      <Switch>
      {/* <DropContext.Provider value={{droptrigger,setDroptrigger}} >
        <NavbarContainer mobileScreen={mobileScreen} droptrigger={droptrigger} setDroptrigger={setDroptrigger} DropContext={DropContext} />
      </DropContext.Provider> */}

      <CustomRoute 
        loggedInPath={Routes.Browse}
        path={Routes.SIGN_IN}
        user={user}>
        <SignIn />
      </CustomRoute>

    <CustomRoute
      path={Routes.SIGN_UP}
      user={user}
      loggedInPath={Routes.Browse}
      >
        <SignUp />
      </CustomRoute>
      
      <Route exact path={Routes.Movies}>
        <Movies />
      </Route>
      <Route exact path={Routes.MyList}>
        <MyList />
      </Route>
      <Route exact path={Routes.NewandPopular}>
        <NewandPopular />
      </Route>
      <Route
       exact 
       path={Routes.TvShows}>
        <TvShows />
      </Route>
      <ProtectedRoute 
        path={Routes.Browse}
        loggedInPath={Routes.SIGN_IN}
        user={user} >
        <Browse />
      </ProtectedRoute>
      <CustomRoute 
        exact 
        path={Routes.Home}
        user={user}
        loggedInPath={Routes.Browse} >
        <Home />
      </CustomRoute>
      </Switch>
    </Router>
  );
}

export default App;