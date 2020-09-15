
import React, { useRef } from 'react';
import useBackHandler from './useBackHandler'
import { WebView } from 'react-native-webview';


const WebApp = () => {
  let _wview = useRef();

  const backHandler = () => {
    _wview.current.goBack();
    return true;
  }

  useBackHandler(backHandler)


  return (
    <WebView
      ref={_wview}
      source={{ uri: 'https://finance.homansystem.com'}}
      startInLoadingState={true}
      allowUniversalAccessFromFileURLs={true}
      javaScriptEnabled={true}
      mixedContentMode={'always'}
    />
  );
};


export default WebApp;
