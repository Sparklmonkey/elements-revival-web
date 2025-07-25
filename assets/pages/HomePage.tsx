import * as React from "react";
import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import Footer from "@/assets/components/Footer";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";
import GameBar from "@/assets/components/gamebar/GameBar";
import {UnityView} from "@/assets/pages/UnityView";

const HomePage = () => {

    return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.view}>
                    <NavBar />
                    <GameBar />
                    <BackgroundDragon />
                    <View style={styles.gameIconLayout}>
                    </View>
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
