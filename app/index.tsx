import {Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainPage from "@/assets/components/MainPage";
import GameRulesPage from "@/assets/pages/GameRulesPage";


export default function Index() {
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