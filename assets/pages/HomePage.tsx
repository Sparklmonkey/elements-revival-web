import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import Footer from "@/assets/components/Footer";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";
import GameBar from "@/assets/components/gamebar/GameBar";
import { UnityView } from "@/assets/pages/UnityView";
import { useRef, useState } from "react";
import {useNavigation} from "@react-navigation/native";

const HomePage = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const footerRef = useRef<View>(null);
    const [isFooterHighlighted, setIsFooterHighlighted] = useState(false);

    const navigation = useNavigation();
    const scrollToFooter = () => {
        // Measure the footer position
        footerRef.current?.measureLayout(
            // @ts-ignore - Known issue with React Native types
            scrollViewRef.current?.getInnerViewNode(),
            (x: number, y: number) => {
                // Scroll to the footer position
                scrollViewRef.current?.scrollTo({ y, animated: true });
                // Highlight the footer
                setIsFooterHighlighted(true);
                // Remove highlight after 2 seconds
                setTimeout(() => setIsFooterHighlighted(false), 2000);
            },
            () => console.log("Failed to measure")
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                ref={scrollViewRef}
                contentContainerStyle={{flexGrow: 1}}
            >
                <View style={styles.view}>
                    <NavBar onContactPress={scrollToFooter} navigation={navigation} />
                    <GameBar />
                    <BackgroundDragon />
                    <View style={styles.gameIconLayout}>
                        <UnityView />
                    </View>
                    <GameDescription />
                    <OtherGames />
                    <View style={{width: '100%'}}
                        ref={footerRef}
                    >
                        <Footer highlightContact={isFooterHighlighted} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    gameIconLayout: {
        width: 1237,
        height: 600,
        overflow: "hidden"
    },
    view: {
        gap: 40,
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
});

export default HomePage;