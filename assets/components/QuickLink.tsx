import {StyleSheet, Text} from "react-native";
import * as React from "react";

type QuickLinkProp = {
    linkName: string,
}

const QuickLink = (props: QuickLinkProp) => {
    return (
        <Text style={[styles.elementsTheRevival2, styles.elementsTypo]}>{props.linkName}</Text>
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