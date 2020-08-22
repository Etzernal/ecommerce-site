import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{user},dispatch] = useStateValue();

  // useEffect
  // Code runs on certain conditions

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in 
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // User is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  console.log("USER IS : " + user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
