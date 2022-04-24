/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import WalletConnectProvider, {useWalletConnect} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
}

const Line = () => {
  return (
      <View style={{
          height: 1,
          backgroundColor: '#C0C0C0',
          alignSelf: 'center',
          marginVertical: 20,
          width: '80%'
      }} />
  )
}

function SampleWCConnect(){
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  async function getETH() {
    console.log('Hello getETH');
    Linking.openURL('https://metamask.app.link/dapp/sampledapp');
  }

  return (
    <View style={styles.container}>
      {!connector.connected ? (
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => {
            connectWallet();
          }}>
          <Text style={styles.buttonTextStyle}>Connect a Wallet</Text>
        </TouchableOpacity>
      ) : null}

      {!!connector.connected ? (
        <>
          <Text>Address: {shortenAddress(connector.accounts[0])}</Text>
          <Line />
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              killSession();
            }}>
            <Text style={styles.buttonTextStyle}>Log Out</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    // backgroundColor: '#27292A',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 25,
  },
  registerTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    flexDirection: 'row',
  },
});



export default function App() {
  console.log(AsyncStorage);
  return (
    <WalletConnectProvider
      storageOptions={{asyncStorage: AsyncStorage}}
      redirectUrl="myapp://"
    >
      <SampleWCConnect />
    </WalletConnectProvider>
  ) 
};