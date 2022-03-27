import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import {mainTheme} from 'theme/mainTheme';
import GlobalStyle from 'GlobalStyle';

import HomeView from './routes/Home';
import Profile from 'routes/Profile';
import Partner from 'routes/Partner';
import CallView from 'routes/Call';
import SignUp from 'routes/SignUp';
import SignIn from 'routes/SignIn';

const App = (): JSX.Element => {
  const isLogged = false;
  const isInCall = false;

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          {isLogged ? (
            <>
              <Route path="/" element={<HomeView />} />
              <Route path="/1on1" element={<Partner />} />
              <Route path="/profile" element={<Profile />} />
              {isInCall && <Route path="/call" element={<CallView />} />}
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<div>Landing page</div>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
