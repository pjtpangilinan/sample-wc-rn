/**
 * @format
 */
import './global';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
const { withWalletConnect } = require('@walletconnect/react-native-dapp');

AppRegistry.registerComponent(appName, () => App);
