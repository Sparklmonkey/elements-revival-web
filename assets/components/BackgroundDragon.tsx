import {Image, StyleSheet, View} from "react-native";
import * as React from "react";

const BackgroundDragon = () => {
    return (
        <View>
            <Image style={styles.dragonsIcon} resizeMode="cover" source={require("../images/rightImg.png")} />
            <Image style={styles.dragonsIcon1} resizeMode="cover" source={require("../images/rightImg.png")} />
        </View>
    );
};

export default BackgroundDragon;


const styles = StyleSheet.create({
    dragonsIcon: {
        left: 0,
        zIndex: 0,
        position: "absolute",
        height: 997,
        top: 90,
        width: 763,
        transform: [
            {scaleX: -1}]
    },
    dragonsIcon1: {
        zIndex: 1,
        position: "absolute",
        right: 0,
        height: 997,
        top: 90,
        width: 763
    }
})