import NavBar from "@/assets/components/NavBar";
import React, {useRef, useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Footer from "@/assets/components/Footer";
import AccountManagerPage from "@/assets/pages/AccountManagerPage";
import {useNavigation} from "@react-navigation/native";

const BaseContainer = ({children} : {children: any}) => {

    const navigation = useNavigation();
    const scrollViewRef = useRef<ScrollView>(null);
    const footerRef = useRef<View>(null);
    const [isFooterHighlighted, setIsFooterHighlighted] = useState(false);

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
    <ScrollView ref={scrollViewRef} style={styles.container}>
        <NavBar onContactPress={scrollToFooter} navigation={navigation} />
        <View style={styles.childContainer}>
            {children}
        </View>
        <View style={{width: '100%'}}
              ref={footerRef}
        >
            <Footer highlightContact={isFooterHighlighted} />
        </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(50, 17, 0, 1)',
        width: '100%',
    },
    childContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    }
});

export default BaseContainer;