import {StyleSheet, Text, View} from "react-native";
import BulletPoint from "@/assets/components/BulletPoint";
import * as React from "react";

const GameDescription = () => {
    return (
        <View style={styles.aboutGame}>
            <Text style={styles.aboutElementsThe}>About Elements The Revival</Text>
            <View style={styles.text}>
                <View style={styles.tips}>
                    <Text style={styles.tipsOfThe}>Tips of the year</Text>
                    <Text
                        style={styles.yourDeckCan}>{`Your deck can have a minimum of 30 cards; manage your deck and customize is as soon as possible, get rid of some of cards you do not like/use and sell them. This way you can instantly have a better deck and some coins. `}</Text>
                    <Text style={styles.elementsIsAn}>{`Elements is an online fantasy card game.
You are an elemental, a spirit composed of one of 12 Elements; Elements are the fundamental building blocks of nature. 
Each Elemental creates a deck of cards based around their core element to fight against other Elemental in a duel. Most Elementals start a duel with 100HP, once that is reduced to 0, the Elemental loses. If the Elemental runs out of cards in their deck, they also lose. 
              							There are 3 types of cards:`}</Text>
                </View>
                <View style={styles.tips}>
                    <BulletPoint title={"Creatures:"}
                                 description={'They are summoned to fight for the elemental; creatures have Attack, Health and may have a special skills.'}/>
                    <BulletPoint title={"Spells:"}
                                 description={'Spells have an immediate effect and are discarded afterwards.'}/>
                    <BulletPoint title={"Permanents:"}
                                 description={'Artifacts, weapons, shields and pillars. Card can stay in play until removed by an effect.'}/>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    aboutGame: {
        width: 1202,
        height: 524,
        zIndex: 4,
        borderRadius: 16,
        gap: 24,
        padding: 24,
        backgroundColor: "rgba(80, 33, 4, 1)",
        borderWidth: 2,
        borderColor: "#d38030",
        borderStyle: "solid"
    },
    aboutElementsThe: {
        fontSize: 28,
        alignSelf: "stretch",
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    text: {
        gap: 24,
        alignSelf: "stretch"
    },
    tips: {
        gap: 16,
        alignSelf: "stretch"
    },
    tipsOfThe: {
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans",
        alignSelf: "stretch",
        fontSize: 20,
        fontWeight: "600"
    },
    yourDeckCan: {
        textAlign: "left",
        fontFamily: "gillSans",
        alignSelf: "stretch",
        color: "rgba(255, 255, 255, 0.75)",
        lineHeight: 23,
        fontSize: 18
    },
    elementsIsAn: {
        color: "rgba(255, 255, 255, 0.75)",
        lineHeight: 23,
        fontSize: 18,
        alignSelf: "stretch",
        letterSpacing: 0.2,
        textAlign: "left",
        fontFamily: "gillSans"
    },
});
export default GameDescription;