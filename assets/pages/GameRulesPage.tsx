import NavBar from "@/assets/components/NavBar";
import * as React from "react";
import Footer from "@/assets/components/Footer";
import {ScrollView, StyleSheet, View} from "react-native";
import Container from "@/assets/pages/HomePage";
import GameRules from "@/assets/components/GameRules";

function GameRulesPage() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.view}>
                    <NavBar />
                    <GameRules />
                    <Footer />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default GameRulesPage;