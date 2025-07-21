import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Caretdown from "@/assets/svg/caretdown";
import QuickLink from "@/assets/components/QuickLink";
import * as React from "react";
import InstagramIcon from "@/assets/svg/InstagramIcon";
import YoutubeIcon from "@/assets/svg/YoutubeIcon";
import FooterDragon from "@/assets/svg/FooterDragon";
import FooterDecor from "@/assets/svg/FooterDecor";
import DiscordIcon from "@/assets/svg/DiscordIcon";
import TwitchIcon from "@/assets/svg/TwitchIcon";

const Footer = () => {

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
                    <View style={styles.contactUs}>
                        <Text style={styles.contactUs1Typo}>Contact Us</Text>
                        <View style={styles.inputArea}>
                            <Text style={styles.enterEMailHere}>Enter e-mail here</Text>
                            <View style={styles.button}>
                                <Text style={styles.send}>Send</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.elementsTheRevival2}>© 2025 Elements: The Revival</Text>
                </View>
                <View style={styles.allLinks}>
                    <View style={styles.quickLinks}>
                        <Text style={styles.quickLinks1}>Quick Links</Text>
                        <View style={styles.tips}>
                            <QuickLink linkName={"About"}/>
                            <QuickLink linkName={"Contact"}/>
                            <QuickLink linkName={"Privacy Policy"}/>
                            <QuickLink linkName={"Terms of Use"}/>
                        </View>
                    </View>
                    <View style={styles.quickLinks2}>
                        <Text style={styles.games}>Games</Text>
                        <View style={styles.tips}>
                            <QuickLink linkName={"Elements the Revival"}/>
                            <QuickLink linkName={"Open EtG"}/>
                        </View>
                    </View>
                </View>
            </View>
            <Image style={styles.footerChild} resizeMode="cover" source={require("../images/footer-dragon.png")}/>
            <FooterDragon style={styles.decorativeLineIcon}/>
        </View>
</View>
)
    ;
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
    games: {
        fontSize: 18,
        alignSelf: "stretch",
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    quickLinks2: {
        gap: 24
    },
    tips: {
        gap: 16,
        alignSelf: "stretch"
    },
    quickLinks1: {
        fontSize: 18,
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    quickLinks: {
        width: 91,
        gap: 24
    },
    allLinks: {
        width: 398,
        flexDirection: "row",
        gap: 0,
        justifyContent: "space-between"
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
        paddingHorizontal: 120,
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
    send: {
        color: "#fff",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "gillSans"
    },
    button: {
        width: 80,
        backgroundColor: "#d38030",
        paddingHorizontal: 8,
        paddingVertical: 10,
        justifyContent: "center",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    container1: {
        width: '100%',
        flexDirection: "row",
        zIndex: 0,
        gap: 0,
        justifyContent: "space-between"
    },
    inputArea: {
        backgroundColor: "#fff",
        paddingLeft: 12,
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 4,
        gap: 0,
        justifyContent: "space-between",
        alignSelf: "stretch",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    leftContainer: {
        width: 375,
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
});

export default Footer;