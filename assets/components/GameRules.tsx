import * as React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RuleCircle from "../svg/RuleCircle";
import GameRuleItem from "@/assets/components/GameRuleItem";
import GamePreviewCard from "@/assets/components/GamePreviewCard";

const GameRules = () => {

    const GameRuleList = [
        {
            id: '0',
            index: '1',
            rule: 'Your deck can have a minimum of 30 cards and a maximum of 60 cards.',
        },
        {
            id: '2',
            index: '2',
            rule: 'Your deck can have a maximum of 6 cards of the same type (does not apply to pillars)',
        },
        {
            id: '3',
            index: '3',
            rule: 'Every spin gives you a chance (about 5%) to win a card from the deck you played against (beside pillars). This also means that winning against a highly specialized deck will give you much higher chances to win cards.',
        },
        {
            id: '4',
            index: '4',
            rule: 'You win a game when your opponent\'s HP are reduced to zero or when they have no more cards to play.',
        },
        {
            id: '5',
            index: '5',
            rule: 'Exploiting a bug that gives infinite money/cards/wins may result in your account being deleted. Nothing against you, you found a bug and you are having fun with it, but it is just not fair for other players.',
        },
        {
            id: '6',
            index: '6',
            rule: 'Different cards have different degrees of rarity; rare cards are more expensive, extremely rare cards are just not for sale.',
        },
    ];

    return (
            <View style={[styles.view, styles.viewBg]}>
                <Text style={styles.gameRules}>Game Rules</Text>
                <View style={styles.text}>
                    <View style={styles.tips}>
                        <Text style={styles.elementsIsProperty}>Elements is property of Zanzarino Design, all rights reserved. Elements can not be copied, modified, or distributed without permission. Trying to obtain any data from the databse by any mean is a violation of the players privacy and it is illegal. Using any third party program to play elements might result in a temporary or permanent ban of your account.</Text>
                    </View>
                    <FlatList
                        style={styles.elements}
                        data={GameRuleList}
                        renderItem={({item}) => <GameRuleItem index={item.index} rule={item.rule} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    viewBg: {
        backgroundColor: "rgba(80, 33, 4, 1)",
        flex: 1
    },
    view: {
        borderRadius: 16,
        borderStyle: "solid",
        borderColor: "#d38030",
        borderWidth: 2,
        padding: 24,
        gap: 40,
        marginVertical: 60,
        marginHorizontal: 120,
    },
    gameRules: {
        fontSize: 28,
        color: "#ebf166",
        textAlign: "center",
        fontFamily: "gillSans",
        fontWeight: "600",
        alignSelf: "stretch"
    },
    text: {
        alignSelf: "stretch",
        gap: 24
    },
    tips: {
        alignSelf: "stretch"
    },
    elementsIsProperty: {
        color: "#fff",
        textAlign: "left",
        fontSize: 20,
        fontFamily: "gillSans",
        fontWeight: "600",
        alignSelf: "stretch"
    },
    elements: {
        gap: 16,
        alignSelf: "stretch"
    },
});

export default GameRules;
