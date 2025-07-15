import {Image, ImageBackground, StyleSheet, View} from "react-native";
import * as React from "react";
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/763;
const BackgroundDragon = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.dragonsIcon} resizeMode="stretch" source={require("../images/rightImg.png")} />
            <ImageBackground style={styles.dragonsIcon1} resizeMode="stretch" source={require("../images/rightImg.png")} />
        </View>
    );
};

export default BackgroundDragon;


const styles = StyleSheet.create({
    dragonsIcon: {
        opacity: 0.1,
        zIndex: 2,
        aspectRatio: 1,
        width: 763,
        maxWidth: '50%',
        flex: 1,
        maxHeight: 997,
    },
    dragonsIcon1: {
        opacity: 0.1,
        zIndex: 2,
        left: 0,
        alignSelf: 'flex-start',
        aspectRatio: 1,
        maxHeight: 997,
        width: 763,
        maxWidth: '50%',
        flex: 1,
        transform: [
            {scaleX: -1}]
    },
    container: {
        position: 'absolute',
        width: '100%',
        zIndex: -1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        paddingTop: 0,
        top: 75
    }
})