import React, {Suspense, lazy} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Routes, Route} from 'react-router-native';
import HeaderTop from './pages/HeaderTop';
import Main from './pages/Main';
import Games from './pages/Games';
import Settings from './pages/Settings';
import PrivateInfo from './pages/PrivateInfo';
import Servers from './pages/Servers';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HeaderTop />}>
          <Route index element={<Main />} />
          <Route path="/games/:gameName" element={<Games />} />
          <Route
            path="/games/:gameName/servers/:serverName"
            element={<Servers />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privateInfo" element={<PrivateInfo />} />
        </Route>
      </Routes>
    </NativeRouter>
  );
};

export default App;
