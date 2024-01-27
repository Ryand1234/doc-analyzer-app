import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
export default function App() {

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 1500);
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <WebView style={styles.container}
      source={{ uri: 'https://doc-analyzer.vercel.app'}}
      // style={{ marginTop: '10%'}}
      sharedCookiesEnabled={true}
      thiredPartyCookieEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
