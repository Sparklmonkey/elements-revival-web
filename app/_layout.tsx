import React from "react";

import * as Font from "expo-font";
import {createStackNavigator} from "@react-navigation/stack";
import MainPage from "@/assets/pages/HomePage";
import GameRulesPage from "@/assets/pages/GameRulesPage";
import LeaderboardPage from "@/assets/pages/LeaderboardPage";
import {Provider} from "react-redux";
import {store} from "@/assets/store/store";
import {UnityView} from "@/assets/pages/UnityView";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


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
      const firebaseConfig = {
          apiKey: "AIzaSyDf7qT7W4izJlUJCWAnAJ8JaJt902dUBI8",
          authDomain: "elementstheproject.firebaseapp.com",
          projectId: "elementstheproject",
          storageBucket: "elementstheproject.firebasestorage.app",
          messagingSenderId: "67576244176",
          appId: "1:67576244176:web:190199d246e64e4c86bbd5",
          measurementId: "G-RKX9X9NYC7"
      };

// Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

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
        <UnityView />

    );
  }
}


