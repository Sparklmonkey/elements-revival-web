import React from "react";
import Index from "@/app/index";

import * as Font from "expo-font";

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'gillSans':  require('../assets/fonts/Gill-Sans.ttf'),
      'evanescence': require('../assets/fonts/Evanescence.ttf'),
      'dauphin': require('../assets/fonts/Dauphin.ttf'),
    })
  }
  render() {
    return <Index />;
  }
}
