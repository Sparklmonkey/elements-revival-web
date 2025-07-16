import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ButtonProps = {
    text: string;
    onPress: () => void;
};

const EtgButton = (props: ButtonProps) => {
    return (
            <TouchableOpacity onPress={props.onPress}>
                <ImageBackground style={styles.buttonIcon} resizeMode="stretch" source={require("../images/button.png")}>
                    <Text style={styles.trainer}>{props.text}</Text>
                </ImageBackground>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonIcon: {
        width: 120,
        height: 26,
        paddingVertical: 9,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    trainer: {
        fontSize: 12,
        textAlign: "left",
        fontFamily: "dauphin",
        color: '#EBF166',
    },

})
export default EtgButton;