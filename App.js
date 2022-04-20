/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import type {Node} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   Linking,
 } from 'react-native';
 import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
//  import AsyncStorage from '@react-native-async-storage/async-storage';
 const { AsyncStorage } = require('@react-native-async-storage/async-storage');
 
 const App: () => Node = () => {
  const [message, setMessage] = useState('hello');

  // const 
  // if (window.ethereum){
  //   console.log('OK!')
  // } else {
  //   console.log('Not OK!')
  // }
  const connector = useWalletConnect();

  async function getETH() {
    console.log('Hello getETH');
    Linking.openURL('https://metamask.app.link/dapp/sampledapp');
    // const {ethereum} = window;
  }  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {getETH()}}
        >
        <Text style={styles.buttonTextStyle}>
          Crypto Wallet Logins {message}
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.registerTextStyle}
        onPress={() => Linking.openURL('https://ethereum.org/en/wallets/')}>
        What are wallets?
      </Text>
    </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 10,
     backgroundColor: '#27292A',
     justifyContent: 'center',
   },
   buttonStyle: {
     backgroundColor: '#7DE24E',
     borderWidth: 0,
     color: 'FFFFFF',
     borderColor: '#7DE24E',
     height: 40,
     alignItems: 'center',
     borderRadius: 30,
     marginLeft: 35,
     marginRight: 35,
     marginTop: 20,
     marginBottom: 25,
   },
   registerTextStyle: {
     color: 'white',
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 14,
     alignSelf: 'center',
     // padding: 1,
   },
   buttonTextStyle: {
     color: '#FFFFFF',
     paddingVertical: 10,
     fontSize: 16,
     fontWeight: '600',
   },
 });
 
 export default App;
 