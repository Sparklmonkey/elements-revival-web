import React from "react";
import Index from "@/app/index";

import * as Font from "expo-font";
import {ScrollView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainPage from "@/assets/components/MainPage";
import GameRulesPage from "@/assets/pages/GameRulesPage";

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'gillSans':  require('../assets/fonts/Gill-Sans.ttf'),
      'evanescence': require('../assets/fonts/Evanescence.ttf'),
      'dauphin': require('../assets/fonts/Dauphin.ttf'),
    })
  }
  render() {
      const Stack = createStackNavigator();

      function MyStack() {
          return (
              <Stack.Navigator>
                  <Stack.Screen name="MainPage" component={MainPage} />
                  <Stack.Screen name="GameRulesPage" component={GameRulesPage} />
              </Stack.Navigator>
          );
      }

    return (
        <MyStack />
    );
  }
}


