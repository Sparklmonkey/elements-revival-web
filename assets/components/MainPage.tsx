import * as React from "react";
import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import GameBar from "@/assets/components/GameBar";
import Footer from "@/assets/components/Footer";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";
import {Unity, useUnityContext} from "react-unity-webgl";
import {Fragment} from "react";

const Container = () => {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: '../unity/Build/UnityLoader.js',
        dataUrl: "../unity/Build/Unity.data",
        frameworkUrl: "../unity/Build/Unity.framework.js",
        codeUrl: "../unity/Build/Unity.wasm",
    });
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <NavBar />
                <GameBar />
                <BackgroundDragon />
                <Fragment>
                    {!isLoaded && (
                        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
                    )}
                <Unity unityProvider={unityProvider} style={styles.gameIconLayout}  />
                </Fragment>
                <GameDescription />
                <OtherGames />
                <Footer />
            </View>
        </View>
    );
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
