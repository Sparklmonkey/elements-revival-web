import {Linking, StyleSheet, Text, TouchableOpacity} from "react-native";
import * as React from "react";

type QuickLinkProp = {
    linkName: string,
    linkUrl: string,
}

const QuickLink = (props: QuickLinkProp) => {

    const openUrl = (url: string) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    return (
        <TouchableOpacity onPress={() => {
            openUrl(props.linkUrl)}
        }>
            <Text style={[styles.elementsTheRevival2, styles.elementsTypo]}>{props.linkName}</Text>
        </TouchableOpacity>
    );
};

export default QuickLink

const styles = StyleSheet.create({
    elementsTypo: {
        fontSize: 16,
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    elementsTheRevival2: {
        alignSelf: "stretch"
    },
})