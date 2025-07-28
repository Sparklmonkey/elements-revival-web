import { Animated, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useRef } from "react";
import QuickLink from "@/assets/components/QuickLink";
import * as React from "react";
import InstagramIcon from "@/assets/svg/InstagramIcon";
import YoutubeIcon from "@/assets/svg/YoutubeIcon";
import FooterDragon from "@/assets/svg/FooterDragon";
import FooterDecor from "@/assets/svg/FooterDecor";
import DiscordIcon from "@/assets/svg/DiscordIcon";
import TwitchIcon from "@/assets/svg/TwitchIcon";
import ContactForm from "@/assets/components/ContactForm";
import QuickLinkContainer from "@/assets/components/QuickLinkContainer";

export type FooterProps = {
    highlightContact: boolean
}

const Footer = (props: FooterProps) => {
    const pulseAnim = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        if (props.highlightContact) {
            // Reset animation value
            pulseAnim.setValue(0);
            // Create pulse animation sequence
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 0.8,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            pulseAnim.setValue(0);
        }
    }, [props.highlightContact]);

    function openUrl(url: string) {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    return (
        <View style={styles.container}>
            <FooterDecor width={'100%'}/>
            <View style={styles.footer}>
                <View style={styles.container1}>
                    <View style={styles.leftContainer}>
                        <View style={styles.gameDescription}>
                            <Text style={styles.elementsTheRevival1}>Elements The Revival</Text>
                            <Text style={styles.revivingTheSoul}>Reviving the soul of forgotten things.</Text>
                            <View style={styles.socials}>
                                <TouchableOpacity onPress={() => {
                                    openUrl("https://discord.gg/kZa3HTmDzz")
                                }}>
                                    <InstagramIcon/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    openUrl("https://discord.gg/kZa3HTmDzz")
                                }}>
                                    <YoutubeIcon/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    openUrl("https://discord.gg/kZa3HTmDzz")
                                }}>
                                    <DiscordIcon/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    openUrl("https://discord.gg/kZa3HTmDzz")
                                }}>
                                    <TwitchIcon/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.elementsTheRevival2}>© 2025 Elements: The Revival</Text>
                    </View>
                    <Animated.View style={[
                            styles.contactFormContainer,
                            {
                                transform: [
                                    {
                                        scale: pulseAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 1.05]
                                        })
                                    }
                                ],
                                opacity: pulseAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0.95]
                                })
                            }
                        ]}>
                        <ContactForm />
                    </Animated.View>
                    <QuickLinkContainer />
                </View>
                <Image style={styles.footerChild} resizeMode="cover" source={require("../images/footer-dragon.png")}/>
                <FooterDragon style={styles.decorativeLineIcon}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    decorativeLineIcon: {
        width: "151.92%",
        height: "3.68%",
        top: "0%",
        right: "-25.95%",
        bottom: "96.32%",
        left: "-25.97%",
        maxHeight: "100%",
        zIndex: -1,
        position: "absolute"
    },
    footerChild: {
        width: 500,
        top: 0,
        right: 0,
        height: 554,
        zIndex: -1,
        position: "absolute",
    },
    elementsTheRevival2: {
        alignSelf: "stretch",
        fontFamily: "evanescence",
        lineHeight: 48,
        fontSize: 40,
        color: '#EBF166',
    },
    container: {
        width: '100%',
        marginHorizontal: 12,
        backgroundColor: "#32241b",
    },
    footer: {
        paddingVertical: 40,
        gap: 43,
        zIndex: 6,
        paddingHorizontal: 48,
        width: '100%',
        overflow: "hidden"
    },
    enterEMailHere: {
        color: "#a2a2a2",
        flex: 1,
        fontSize: 14,
        textAlign: "left",
        fontFamily: "gillSans"
    },
    container1: {
        width: '100%',
        flexDirection: "row",
        zIndex: 0,
        gap: 0,
        justifyContent: "flex-start"
    },
    leftContainer: {
        flex: 1,
        minWidth: 375,
        width: '33%',
        gap: 24
    },
    gameDescription: {
        gap: 8,
        alignSelf: "stretch"
    },
    elementsTheRevival1: {
        textAlign: "left",
        alignSelf: "stretch",
        fontFamily: "evanescence",
        lineHeight: 48,
        fontSize: 40,
        color: '#EBF166',
    },
    revivingTheSoul: {
        color: "rgba(255, 255, 255, 0.6)",
        textAlign: "left",
        fontSize: 18,
        alignSelf: "stretch",
        fontFamily: "gillSans"
    },
    socials: {
        gap: 7,
        flexDirection: "row"
    },
    iconLayout: {
        borderRadius: 100,
        overflow: "hidden"
    },
    contactUs: {
        width: 297,
        gap: 12
    },
    contactUs1Typo: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans",
        fontSize: 18,
        alignSelf: "stretch"
    },
    contactFormContainer: {
        flex: 2,
        minWidth: 350,
        width: '30%',
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 8,
    },
});

export default Footer;