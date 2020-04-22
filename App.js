import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView style={styles.webView}
      source={{uri: 'https://www.sindpd.org.br/sindpd/site/categoria.jsp?id=0'}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      >
    </WebView>

  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: 20,
  }
});
