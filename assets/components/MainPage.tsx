import * as React from "react";
import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import GameBar from "@/assets/components/GameBar";
import Footer from "@/assets/components/Footer";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";

const Container = () => {
    return (
        <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.view}>
                <NavBar />
                <GameBar />
                <BackgroundDragon />
                <iframe style={styles.gameIconLayout} src="https://itch.io/embed-upload/14057874?color=333333" width="1237" height="600"><a href="https://sparklmonkey.itch.io/element-revival">Play Element Revival on itch.io</a></iframe>
                <GameDescription />
                <OtherGames />
                <Footer />
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    gameIconLayout: {
        position: 'absolute',
        top: 300,
        width: 1237,
        height: 600,
        overflow: "hidden"
    },
    view: {
        height: 2237,
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

export default Container;
