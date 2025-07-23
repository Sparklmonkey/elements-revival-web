import React from "react";
import * as Font from "expo-font";
import Index from "@/app/index";
import {Platform, View, Text} from 'react-native';
import MobileIndex from "@/app/mobileIndex";


export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'gillSans':  require('../assets/fonts/Gill-Sans.ttf'),
      'evanescence': require('../assets/fonts/Evanescence.ttf'),
      'dauphin': require('../assets/fonts/Dauphin.ttf'),
    })
  }

  render() {
    return (
          Platform.OS === 'web' ? <Index /> : <MobileIndex />
    );
  }
}


