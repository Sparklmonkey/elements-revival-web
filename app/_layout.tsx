import React from "react";
import * as Font from "expo-font";
import Index from "@/app/index";


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
        <Index />
    );
  }
}


