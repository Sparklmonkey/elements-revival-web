import {StyleSheet, Text, View} from "react-native";
import RuleCircle from "@/assets/components/RuleCircle";
import * as React from "react";

type RuleItemProps = {
    index: string;
    rule: string;
}
const GameRuleItem = (props: RuleItemProps) => {

    return (
        <View style={styles.text1}>
            <View style={styles.title}>
                <View style={{
                    justifyContent: "center",
                }}>
                    <RuleCircle />
                    <Text style={styles.titleChild}>{props.index}</Text>
                </View>
                <Text style={styles.yourDeckCan}>{props.rule}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text1: {
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignSelf: "stretch"
    },
    title: {
        alignSelf: "stretch",
        alignItems: "center",
        flexDirection: "row",
        gap: 16
    },
    titleChild: {
        position: "absolute",
        alignSelf: "center",
        color: "#fff",
        fontFamily: 'dauphin',
        fontSize: 18,
    },
    yourDeckCan: {
        flex: 1,
        color: "#d5ce7b",
        lineHeight: 25,
        letterSpacing: 0.2,
        textAlign: "left",
        fontSize: 20,
        fontFamily: "gillSans",
        fontWeight: "600"
    }
});

export default GameRuleItem;