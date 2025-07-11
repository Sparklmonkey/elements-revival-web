import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Frame38 from "../assets/frame-38.svg"

const AboutGame = () => {

    return (
        <SafeAreaView style={styles.viewBg}>
            <View style={[styles.view, styles.viewBg]}>
                <Text style={styles.gameRules}>Game Rules</Text>
                <View style={styles.text}>
                    <View style={styles.tips}>
                        <Text style={styles.elementsIsProperty}>Elements is property of Zanzarino Design, all rights reserved. Elements can not be copied, modified, or distributed without permission. Trying to obtain any data from the databse by any mean is a violation of the player's privacy and it is illegal. Using any third party program to play elements might result in a temporary or permanent ban of your account.</Text>
                    </View>
                    <View style={styles.elements}>
                        <View style={styles.text1}>
                            <View style={[styles.title, styles.titleFlexBox]}>
                                <Frame38 style={styles.titleChild} width={28} height={28} />
                                <Text style={[styles.yourDeckCan, styles.yourTypo]}>Your deck can have a minimum of 30 cards and a maximum of 60 cards.</Text>
                            </View>
                        </View>
                        <View style={styles.text1}>
                            <View style={styles.titleFlexBox}>
                                <Frame38 style={styles.titleChild} width={28} height={28} />
                                <Text style={[styles.yourDeckCan1, styles.yourTypo]}>Your deck can have a maximum of 6 cards of the same type (does not apply to pillars)</Text>
                            </View>
                        </View>
                        <View style={styles.text1}>
                            <View style={styles.titleFlexBox}>
                                <Frame38 style={styles.titleChild} width={28} height={28} />
                                <Text style={[styles.yourDeckCan1, styles.yourTypo]}>Every spin gives you a chance (about 5%) to win a card from the deck you played against (beside pillars). This also means that winning against a highly specialized deck will give you much higher chances to win cards.</Text>
                            </View>
                        </View>
                        <View style={styles.text1}>
                            <View style={styles.titleFlexBox}>
                                <Frame38 style={styles.titleChild} width={28} height={28} />
                                <Text style={[styles.yourDeckCan1, styles.yourTypo]}>You win a game when your opponent's HP are reduced to zero or when they have no more cards to play.</Text>
                            </View>
                        </View>
                        <View style={styles.text1}>
                            <View style={styles.titleFlexBox}>
                                <Frame38 style={styles.titleChild} width={28} height={28} />
                                <Text style={[styles.yourDeckCan1, styles.yourTypo]}>Exploiting a bug that gives infinite money/cards/wins may result in your account being deleted. Nothing against you, you found a bug and you are having fun with it, but it is just not fair for other players.</Text>
                            </View>
                        </View>
                        <View style={styles.text1}>
                            <View style={styles.titleFlexBox}>
                                <Frame38 style={styles.titleChild} width={28} height={28} />
                                <Text style={[styles.yourDeckCan1, styles.yourTypo]}>Different cards have different degrees of rarity; rare cards are more expensive, extremely rare cards are just not for sale.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>);
};

const styles = StyleSheet.create({
    aboutGame: {
        flex: 1,
        backgroundColor: "rgba(80, 33, 4, 0.25)"
    },
    viewBg: {
        backgroundColor: "rgba(80, 33, 4, 0.25)",
        flex: 1
    },
    titleFlexBox: {
        alignItems: "center",
        flexDirection: "row",
        gap: 16
    },
    yourTypo: {
        color: "#d5ce7b",
        lineHeight: 25,
        letterSpacing: 0.2,
        textAlign: "left",
        fontSize: 20,
        fontFamily: "Gill Sans",
        fontWeight: "600"
    },
    gameRules: {
        fontSize: 28,
        color: "#ebf166",
        textAlign: "center",
        fontFamily: "Gill Sans",
        fontWeight: "600",
        alignSelf: "stretch"
    },
    elementsIsProperty: {
        color: "#fff",
        textAlign: "left",
        fontSize: 20,
        fontFamily: "Gill Sans",
        fontWeight: "600",
        alignSelf: "stretch"
    },
    tips: {
        alignSelf: "stretch"
    },
    titleChild: {
        borderRadius: 100,
        overflow: "hidden"
    },
    yourDeckCan: {
        flex: 1,
        color: "#d5ce7b",
        lineHeight: 25,
        letterSpacing: 0.2
    },
    title: {
        alignSelf: "stretch"
    },
    text1: {
        borderRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignSelf: "stretch"
    },
    yourDeckCan1: {
        width: 1076
    },
    elements: {
        gap: 16,
        alignSelf: "stretch"
    },
    text: {
        alignSelf: "stretch",
        gap: 24
    },
    view: {
        width: "100%",
        borderRadius: 16,
        borderStyle: "solid",
        borderColor: "#d38030",
        borderWidth: 2,
        padding: 24,
        gap: 24
    }
});

export default AboutGame;
