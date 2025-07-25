import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import GameRulesPage from "@/assets/pages/GameRulesPage";
import HomePage from "@/assets/pages/HomePage";
import LeaderboardPage from "@/assets/pages/LeaderboardPage";
import {Provider} from "react-redux";
import {store} from "@/assets/store/store";

function Index() {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    flex: 1
                }
            }}>
                <Stack.Screen name="HomePage" component={HomePage}/>
                <Stack.Screen name="GameRulesPage" component={GameRulesPage}/>
                <Stack.Screen name="LeaderboardPage" component={LeaderboardPage}/>
            </Stack.Navigator>
        </Provider>
    );
}

export default Index;