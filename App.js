import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import LoadingScreen from './Component/LoadingScreen'
import WebView from './Component/WebView'


const App = () => {
  const [isLoad, setIsLoad] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, [isLoad]);
  return (
    <>
    <StatusBar  barStyle="default" backgroundColor="#4b6b9c"/>
      {isLoad ? (
        <LoadingScreen />
      ) : (
          <WebView />
        )}
    </>
  );
};


export default App;
