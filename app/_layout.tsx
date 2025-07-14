import React from "react";

import * as Font from "expo-font";
import {ScrollView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainPage from "@/assets/pages/HomePage";
import GameRulesPage from "@/assets/pages/GameRulesPage";
import LeaderboardPage from "@/assets/pages/LeaderboardPage";
import {Provider} from "react-redux";
import {store} from "@/assets/store/store";

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
              <Provider store={store}>
                  <Stack.Navigator screenOptions={{
                      headerShown: false,
                      cardStyle: {
                          flex: 1
                      }
                  }}>
                      <Stack.Screen name="MainPage" component={MainPage} />
                      <Stack.Screen name="GameRulesPage" component={GameRulesPage} />
                      <Stack.Screen name="LeaderboardPage" component={LeaderboardPage} />
                  </Stack.Navigator>
              </Provider>

          );
      }

    return (
        <MyStack />
    );
  }
}


