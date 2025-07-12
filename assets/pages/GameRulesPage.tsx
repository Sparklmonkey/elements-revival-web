import NavBar from "@/assets/components/NavBar";
import * as React from "react";
import Footer from "@/assets/components/Footer";
import {StyleSheet, View} from "react-native";
import Container from "@/assets/components/MainPage";
import GameRules from "@/assets/components/GameRules";

function GameRulesPage() {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <NavBar />
                <GameRules />
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default GameRulesPage;