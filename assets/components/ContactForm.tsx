import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import SearchIcon from "@/assets/svg/SearchIcon";


const ContactForm = () => {

    const [emailInputText, setEmailInputText] = useState<string>("");

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Contact Us</Text>
            </View>
            <View style={styles.formContainer}>
            </View>
            <View style={styles.formColumn}>
                <View style={styles.searchBar}>
                    <TextInput
                        onSubmitEditing={() => {
                        }}
                        style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                        onChangeText={setEmailInputText}
                        value={emailInputText}
                        placeholder="Enter e-mail here"
                        keyboardType="default"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    searchBar: {
        width: '20%',
        backgroundColor: "rgba(213, 206, 123, 0.15)",
        gap: 8,
        padding: 12,
        borderColor: "#d5ce7b",
        borderRadius: 8,
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid"
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#d38030",
        width: "100%",
        height: "100%",
        backgroundColor: "#d38030",
        marginHorizontal: 50,
    },
    titleContainer: {
        marginTop: 0,
        alignItems: "flex-start",
        width: "100%",
        padding: 12,
    },
    title: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans",
        fontSize: 18,
    },
    formContainer: {
        flex: 1,
        flexDirection: "row",
    },
    formColumn: {
        flex: 1,
        flexDirection: "column",
    },
    searchByUsername: {
        color: "#d38030",
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600",
        flex: 1,
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
    enterEMailHere: {
        color: "#a2a2a2",
        flex: 1,
        fontSize: 14,
        textAlign: "left",
        fontFamily: "gillSans"
    },
})

export default ContactForm;

const styles = StyleSheet.create({

    searchBar: {
        height: 36,
        backgroundColor: "rgba(213, 206, 123, 0.15)",
        gap: 8,
        padding: 12,
        borderColor: "#d5ce7b",
        borderRadius: 8,
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid"
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#d38030",
        width: "100%",
        height: "100%",
        backgroundColor: "#d38030",
        marginHorizontal: 50,
    },
    titleContainer: {
        marginTop: 0,
        alignItems: "flex-start",
        width: "100%",
        padding: 12,
    },
    title: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans",
        fontSize: 18,
    },
    formContainer: {
        flex: 1,
        flexDirection: "row",
    },
    formColumn: {
        flex: 1,
        flexDirection: "column",
    },
    searchByUsername: {
        color: "#d38030",
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600",
        flex: 1,
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
    enterEMailHere: {
        color: "#a2a2a2",
        flex: 1,
        fontSize: 14,
        textAlign: "left",
        fontFamily: "gillSans"
    },
})

export default ContactForm;