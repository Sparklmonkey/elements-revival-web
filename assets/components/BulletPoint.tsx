import {Image, StyleSheet, Text, View} from "react-native";
import * as React from "react";

type BulletPointProps = {
    title: string,
    description: string,
}
const BulletPoint = (props: BulletPointProps) => {
    return (
<View style={styles.text1}>
    <View style={styles.title}>
        <Image style={styles.bulletIcon} resizeMode="cover" source={require("../images/bullet.png")} />
        <Text style={[styles.creatures, styles.creaturesTypo]}>{props.title}</Text>
    </View>
    <View style={styles.subText}>
        <Text style={[styles.theyAreSummoned, styles.creaturesTypo]}>{props.description}</Text>
    </View>
</View>
    );
};

export default BulletPoint


const styles = StyleSheet.create({
theyAreSummoned: {
    color: "rgba(255, 255, 255, 0.75)",
        lineHeight: 23,
        fontSize: 18,
        flex: 1
},
subText: {
    paddingLeft: 28,
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
},
bulletIcon: {
    width: 20,
        height: 20
},
creaturesTypo: {
    letterSpacing: 0.2,
        textAlign: "left",
        fontFamily: "gillSans"
},
creatures: {
    lineHeight: 25,
        color: "#d5ce7b",
        fontSize: 20,
        fontWeight: "600",
        width: 1200
},
text1: {
    alignSelf: "stretch"
},
title: {
    gap: 8,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
},
})