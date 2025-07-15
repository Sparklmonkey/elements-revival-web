import * as React from "react";
import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import GameBar from "@/assets/components/GameBar";
import Footer from "@/assets/components/Footer";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";
import {UnityView} from "@/assets/pages/UnityView";
import {useSelector} from "react-redux";
import {RootState} from "@/assets/store/store";

const HomePage = () => {

    const shouldShowUnity: boolean = useSelector((state:RootState) => state.pageData.shouldShowUnity);

    return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.view}>
                    <NavBar />
                    <GameBar />
                    <BackgroundDragon />
                    <View style={styles.gameIconLayout}>
                        {shouldShowUnity ? <UnityView /> : <View />}
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
