import * as React from "react";
import {Text, StyleSheet, View, ImageBackground, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Caretdown from '@/assets/components/caretdown';
const GameBar = () => {
    return (
        <View style={styles.game}>
            <View style={styles.gameBar}>
                <Text style={styles.version553}>Version 5.5.3</Text>
                <ImageBackground style={styles.buttonIcon} resizeMode="stretch" source={require("../images/button.png")}>
                    <Text style={styles.trainer}>Trainer</Text>
                </ImageBackground>
                <ImageBackground style={styles.buttonIcon} resizeMode="stretch" source={require("../images/button.png")}>
                    <Text style={styles.trainer}>Setting</Text>
                </ImageBackground>
                <ImageBackground style={styles.buttonIcon} resizeMode="stretch" source={require("../images/button.png")}>
                    <Text style={styles.trainer}>Game Rules</Text>
                </ImageBackground>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    trainer: {
        fontSize: 12,
        textAlign: "left",
        fontFamily: "gillSans",
    },
    buttonIcon: {
        width: 120,
        height: 26,
        paddingVertical: 9,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    game: {
        zIndex: 3,
        gap: 24,
        width: '75%',
    },
    gameBar: {
        backgroundColor: "#411b00",
        paddingHorizontal: 24,
        paddingVertical: 12,
        gap: 16,
        borderWidth: 2,
        borderColor: "#d38030",
        borderRadius: 12,
        flexDirection: "row",
        alignSelf: "stretch",
        borderStyle: "solid",
        alignItems: "center",
        overflow: "hidden"
    },
    version553: {
        letterSpacing: 1.4,
        fontFamily: "dauphin",
        textAlign: "left",
        fontSize: 18,
        flex: 1
    },
});
export default GameBar;