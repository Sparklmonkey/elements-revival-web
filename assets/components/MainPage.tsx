import * as React from "react";
import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Caretdown from "@/assets/components/caretdown"
import LeftArrow from "@/assets/components/LeftArrow";
import RightArrow from "@/assets/components/RightArrow";
import GradientText from "@/assets/components/GradientText";
import QuickLink from "@/assets/components/QuickLink";
import BulletPoint from "@/assets/components/BulletPoint";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import GameBar from "@/assets/components/GameBar";
import Footer from "@/assets/components/Footer";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";

const Container = () => {

    return (
        <View style={styles.container}>
                <View style={styles.view}>
                    <NavBar />
                    <GameBar />
                    <BackgroundDragon />
                    <Image style={styles.gameIconLayout} resizeMode="cover" source={require("../images/my-version.png")}/>
                    <GameDescription />
                    <OtherGames />
                    <Footer />
                </View>
        </View>);
};

const styles = StyleSheet.create({
    gameIconLayout: {
        position: 'absolute',
        top: 300,
        width: 1072,
        height: 519,
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
        height: 250,
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
});

export default Container;
