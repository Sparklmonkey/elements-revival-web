import {Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {ImageSourcePropType} from "react-native/Libraries/Image/Image";

type PreviewCardProps = {
    imageUrl: ImageSourcePropType;
    title: string;
    description: string;
    pageUrl: string;
}

const GamePreviewCard = (props: PreviewCardProps) => {
    const handleClick = () => {
        Linking.canOpenURL(props.pageUrl).then(supported => {
            if (supported) {
                Linking.openURL(props.pageUrl);
            } else {
                console.log("Don't know how to open URI: " + props.pageUrl);
            }
        });
    };
    return (
        <View style={styles.game1}>
            <Image style={styles.gamePreviewIcon} resizeMode="contain"
                   source={props.imageUrl}/>
            <View style={styles.gameDescription}>
                <Text style={styles.openetg}>{props.title}</Text>
                <Text style={styles.openetgIsA}>{props.description}</Text>
            </View>
            <TouchableOpacity onPress={handleClick}>
                <ImageBackground style={styles.buttonIcon3} resizeMode="stretch"
                                 source={require("../images/button.png")}>
                        <Text style={styles.wiki}>Play Now</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
);

};

const styles = StyleSheet.create({
    wiki: {
        textAlign: "left",
        fontSize: 18,
        fontFamily: "gillSans",
    },
    buttonIcon3: {
        height: 48,
        alignSelf: "stretch",
        paddingVertical: 9,
        paddingHorizontal: 53,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    gameDescription: {
        gap: 8,
        alignSelf: "stretch"
    },
    openetgIsA: {
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "left",
        fontSize: 18,
        alignSelf: "stretch",
        fontFamily: "gillSans",
    },
    openetg: {
        fontSize: 24,
        alignSelf: "stretch",
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    game1: {
        width: 384,
        justifyContent: 'space-between',
        gap: 16,
        borderRadius: 12,
        overflow: "hidden",
        padding: 24,
        backgroundColor: "rgba(80, 33, 4, 1)",
        borderWidth: 2,
        borderColor: "#d38030",
        borderStyle: "solid",
        marginHorizontal: 20,
    },
    gamePreviewIcon: {
        borderRadius: 4,
        height: 180,
        alignSelf: "stretch",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden"
    },
});
export default GamePreviewCard;