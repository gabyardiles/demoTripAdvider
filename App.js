import * as React from 'react';
import Navigation from './app/navigations/Navigations';
import { firebaseApp } from './app/utils/ConfigFirebase';


export default class App extends React.Component {
  
  render() {
    return <Navigation/>
  }
}