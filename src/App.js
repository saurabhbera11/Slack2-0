import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './app/components/Header'
import styled from 'styled-components'
import Sidebar from './app/components/Sidebar';
import Chat from './app/components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Login from "../src/app/components/Login"
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=4
          00x300" alt=""
          />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>

    )
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat></Chat>
                </Route>
              </Switch>
            </AppBody>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;

const AppLoading = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
width:100%;
`;

const AppLoadingContents = styled.div`
  text-align:center;
padding-bottom: 100px;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;

>img{
  height:100px;
  padding:20px;
  margin-bottom:40px;
}
`