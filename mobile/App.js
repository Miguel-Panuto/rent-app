import React from 'react';
import { YellowBox } from 'react-native'
import Routes from './src/routes';

// A view é como uma div no react em jsx, elementos de texto são postos dentro de text 

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
  ])

export default function App() {
  
  return <Routes />
}