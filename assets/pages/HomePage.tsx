import * as React from "react";
import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import GameBar from "@/assets/components/GameBar";
import Footer from "@/assets/components/Footer";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";
import {useFocusEffect, useIsFocused, useScrollToTop} from "@react-navigation/native";
import {useRef, useState} from "react";

const HomePage = () => {
    const [isFocused, setIsFocused] = useState<boolean>(true);

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            setIsFocused(true)
            console.log(isFocused)
            return () => {
                // Do something when the screen is unfocused
                setIsFocused(false)
                console.log(isFocused)
            };
        }, [])
    );
    return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.view}>
                    <NavBar />
                    <GameBar />
                    <BackgroundDragon />
                    if (isFocused) {
                    <iframe style={styles.gameIconLayout} src="https://itch.io/embed-upload/14057874?color=333333" width="1237" height="600"><a href="https://sparklmonkey.itch.io/element-revival">Play Element Revival on itch.io</a></iframe>
                    }
                    <GameDescription />
                    <OtherGames />
                    <Footer />
                </View>
                </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    gameIconLayout: {
        width: 1237,
        height: 600,
        overflow: "hidden"
    },
    view: {
        gap: 40,
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
    container: {
        height: "100%",
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
});

export default HomePage;
