import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import {mainTheme} from 'theme/mainTheme';
import GlobalStyle from 'GlobalStyle';

import HomeView from './views/Home';
import Profile from 'views/Profile';
import GroupCall from 'views/GroupCall';

const App = (): JSX.Element => {
  const isLogged = true;
  const isInCall = true;

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          {isLogged ? (
            <>
              <Route path="/" element={<HomeView />} />
              <Route path="/1on1" element={<HomeView />} />
              <Route path="/profile" element={<Profile />} />
              {isInCall && <Route path="/call" element={<GroupCall />} />}
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <Route path="/" element={<div>Landing page</div>} />
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
